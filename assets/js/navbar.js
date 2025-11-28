// Toggle a sticky navbar class when the page is scrolled
(function(){
  function onReady(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function(){
    var nav = document.querySelector('.maine-menu');
    if(!nav) return;

    var threshold = nav.offsetHeight + 40;
    var isFixed = false;

    function setFixed(fixed){
      if(fixed === isFixed) return;
      isFixed = fixed;
      if(fixed){
        nav.classList.add('nav-fixed');
        // prevent content jump by adding padding to body
        document.body.style.paddingTop = nav.offsetHeight + 'px';
      } else {
        nav.classList.remove('nav-fixed');
        document.body.style.paddingTop = null;
      }
    }

    function onScroll(){
      var y = window.pageYOffset || document.documentElement.scrollTop;
      if(y > threshold) setFixed(true);
      else setFixed(false);
    }

    // re-evaluate threshold on resize (nav size might change)
    window.addEventListener('resize', function(){
      threshold = nav.offsetHeight + 40;
      onScroll();
    });

    window.addEventListener('scroll', onScroll);

    // init state
    onScroll();
  });
})();
