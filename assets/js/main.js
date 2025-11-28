jQuery(document).ready(function(){


  jQuery(".owl-carousel2").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:2,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:true
      }
    }
  }
  );

  jQuery(".owl-carousel3").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:true
      }
    }
  }
  );

  jQuery(".owl-carousel4").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:2,
        nav:true,
        loop:true
      }
    }
  }
  );



});

function myFunction(x) {
  x.classList.toggle("change");
}

jQuery(function(){
  var lb = document.getElementById('imageLightbox');
  var lbImg = document.getElementById('lightboxImage');
  var lbClose = document.getElementById('lightboxClose');
  function openLb(src, alt){
    if(!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeLb(){
    if(!lb) return;
    lb.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(function(){ if(lbImg){ lbImg.src = ''; } }, 250);
  }
  document.querySelectorAll('.portfolio-card img').forEach(function(img){
    img.addEventListener('click', function(){
      openLb(this.getAttribute('src'), this.getAttribute('alt'));
    });
  });
  if(lb){
    lb.addEventListener('click', function(e){
      if(e.target === lb){ closeLb(); }
    });
  }
  if(lbClose){ lbClose.addEventListener('click', closeLb); }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && lb && lb.classList.contains('show')){ closeLb(); }
  });
});