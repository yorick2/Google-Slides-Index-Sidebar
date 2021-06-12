function getSlideByObjectId(slideObjectId){
  return SlidesApp.getActivePresentation().getSlideById(slideObjectId);
}

function selectAsCurrentPage(slide){
  /**
   WARNING!: The left slide selector sidebar dosnt update right if slide.selectAsCurrentPage() used.
   Also slecting a current element looks clunky because it leaves it selected. So creating an element
   and removing after selection works best
   */
  var element  = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
  element.select();
  element.remove();
}

/**
 * @param string slideObjectId
 */
function setCurrentSlide(slideObjectId) {
  var slide = getSlideByObjectId(slideObjectId.trim());
  selectAsCurrentPage(slide);
}

