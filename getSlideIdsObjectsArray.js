function getLayoutTemplate(selection)
{
  var layouts = SlidesApp.getActivePresentation().getLayouts();
  for(var i=0; i<layouts.length ;i++) {
    if( layouts[i].getLayoutName() == selection){
        return layouts[i];
    }
  }
}

/**
 * @return object
 */
function getSlidesByTemplate(layoutTemplate){
  var output = {}
  var slides = SlidesApp.getActivePresentation().getSlides();
  for(var i=0; i<slides.length ;i++){
    if(slides[i].getLayout().getLayoutName() === layoutTemplate.getLayoutName()){
      output[i] = slides[i];
    }
  }
  return output;
}

function getSlideTitle(slide){
  if(slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE) == null){
    return null;
  }
  return slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE)
        .asShape()
        .getText()
        .asString();
}

/**
 * @return array
 */
function getSlideIdsObjectsArray(formObject) {
  var output = [];
  // var layoutName = 'SECTION_HEADER'; // for debugging use
  var layoutName = formObject['layout-template'];
  if(layoutName.length == 0){
    return { 0: 'Please select a template and try again'}
  } 
  var layoutTemplate = getLayoutTemplate(layoutName);
  var slides = getSlidesByTemplate(layoutTemplate);
  var count = 0;
  for(i in slides) {
    output[count] = {
      id: slides[i].getObjectId(),
      title: getSlideTitle(slides[i]),
      position: parseInt(i)+1
    }
    if(output[count].title == null){
      output[count].title = '';
    }
    count++;
  }
  return output;
}
