function onOpen(event)
{  
  var ui = SlidesApp.getUi();
  //ui.createMenu('Index Sidebar')
  ui.createAddonMenu()
      .addItem('Sidebar', 'showSidebar')
      .addToUi();
}

function onInstall(event) {
  onOpen(event);
}

function showSidebar()
{
  var html = HtmlService.createTemplateFromFile('Sidebar')
      .evaluate()
      .setTitle('Index Sidebar')
      .setWidth(800);
  var ui = SlidesApp.getUi();
  ui.showSidebar(html);
}
