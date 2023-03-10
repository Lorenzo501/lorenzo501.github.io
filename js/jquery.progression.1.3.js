/*
 * Copyright (c) 2012 Lorenzo Pappalettera.
 */

(function($) {
	$.fn.progression = function(options) {
		// RÃ©cupÃ©ration des options par dÃ©faut
		var opts = $.extend({
			Current: 50,
			Maximum: 100,
			Background: '#FFFFFF',
			TextColor: '#000000',
			aBackground: '#FF0000',
			aTextColor: '#FFFFFF',
			BorderColor: '#000000',
			Animate: true,
			AnimateTimeOut: 3000,
			Easing: 'linear',
			startFct : null,
			endFct : null
		}, $.fn.progression.defaults, options);
		
		if(options)
			var newCurrent = options.Current;
		
		// Boucle sur les Ã©lÃ©ments appelÃ©s
		return this.each(function() {
			$this = $(this); // ElÃ©ment en cours
			$innerdiv=$this.find(".progress"); // On recherche si l'Ã©lÃ©ment a dÃ©jÃ  Ã©tÃ© traitÃ©
			
			// Options SpÃ©cifiques + MÃ©tadata ?
			var o = $.metadata ? $.extend({}, opts, $this.metadata()) : opts;

			// Premier traitement de l'Ã©lÃ©ment, pour la mise en place
			if($innerdiv.length!=1)
				BuildBarre($this, o);
			else
			{
				// Si c'est une nouvelle valeur, la fonction doit avoir la prioritÃ© sur les mÃ©tadata
				if(newCurrent)
					o.Current = newCurrent;
				o.Maximum = parseInt($this.attr('pmax'));
			}

			// Valeur supÃ©rieur au maximum ?
			if( o.Current > o.Maximum )
			{
				debug('La valeur demandee doit etre infÃ©rieur ou egale a la valeur maximale.')
				return false;
			}

			// Calcul du pourcentage actuel
			var aWidth = Math.round(parseInt($this.attr('pcur'))/o.Maximum*100);
			// Calcul du nouveaux pourcentage
			var Width = Math.round(parseInt(o.Current)/o.Maximum*100);			
			
			//Start Callback
			if (typeof o.startFct == 'function')
				o.startFct(o);
			
			if(o.Animate)
			{
				var oldCurrent = parseInt($this.attr('pcur'));
				var Steps = Math.abs(oldCurrent - o.Current);
				var StepsTimeOut = Math.floor(o.AnimateTimeOut/o.Maximum);

				$innerdiv.queue("fx", []);
				$innerdiv.stop();
				$innerdiv.animate({ width: Width+"%" }, {
					duration: Math.round(StepsTimeOut*(Steps+1)), 
					queue: false, 
					easing: o.Easing,
					complete: function(){
						if (typeof o.endFct == 'function')
							o.endFct(o);
					} 
				});
				
				for (i=0; i<=Steps; i++) {
					$innerdiv.animate({opacity: 1},{
							duration: Math.round(StepsTimeOut*i), 
							queue: false, 
							complete: function(){
								if(oldCurrent<=o.Current)
									$(this).progressionSetTextTo(oldCurrent++);
								else
									$(this).progressionSetTextTo(oldCurrent--);
							}
					});
      			}
			}
			else
			{
				$innerdiv.css({ width: Width+'%' });
				$innerdiv.progressionSetTextTo(o.Current);
				
				if (typeof o.endFct == 'function')
					o.endFct(o);
			}
		});
	};

	// Fonction de crÃ©ation de la barre
	function BuildBarre($this, o) {
		// On vide la barre
		$this.html('');

		$this.css({
			textAlign: 'left',
			position: 'relative',
			overflow: 'hidden',
			backgroundColor: o.Background,
			borderColor: o.BorderColor,
			color: o.TextColor
		});
    	// Si largeur SpÃ©cifique
		if(o.Width)
			$this.css('width', o.Width);
		// Si hauteur SpÃ©cifique
		if(o.Height)
			$this.css({ height: o.Height, lineHeight: o.Height	});
		// Si image de fond
		if(o.BackgroundImg)
			$this.css({ backgroundImage: 'url(' + o.BackgroundImg + ')' });
		
		$innerdiv=$("<div class='progress'></div>");					

		$("<div class='text'>&nbsp;</div>").css({
			position: 'absolute',
			width: '100%',
			height: '100%',
			textAlign: 'center'
		}).appendTo($this);

		$("<span class='text'>&nbsp;</span>")
			.css({
				position: 'absolute',
				width: $this.width(),
				textAlign: 'center'
			})
			.appendTo($innerdiv);
		
		$this.append($innerdiv);
		
		// On applique le CSS de $innerdiv
		$innerdiv.css({
			position: 'absolute',
			width: 0,
			height: '100%',
			overflow: 'hidden',
			backgroundColor: o.aBackground,
			color: o.aTextColor
		});
		// Si image de fond active
		if(o.aBackgroundImg)
			$innerdiv.css({ backgroundImage: 'url(' + o.aBackgroundImg + ')' });

		$this.attr('pmax', o.Maximum);
		$this.attr('pcur', 0);
  	};

	// Fonction pour aller Ã  une valeur prÃ©cise
	$.fn.progressionSetTextTo = function(i) {		
		return this.each(function() {
			$this = $(this).parent();
			if($this.attr('pmax')!=100)	
				$this.find(".text").html(i+"/"+$this.attr('pmax'));
			else
				$this.find(".text").html(i+" %");
				
			$this.attr('pcur', i);
		});
	};

	// Fonction d'impression dans la console javascript
	function debug($txt) {
    	if (window.console && window.console.log)
      		window.console.log('jQuery Progression: ' + $txt);
  	};
  	

	$.fn.progression.defaults = {};

})(jQuery);