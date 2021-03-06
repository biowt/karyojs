//Set Karyo size
Karyo.prototype.SetSize = function(w, h)
{
  //Resize the parent div
  $('#' + this.parent.id).width(w);
  //$('#' + this.parent.id).height(h);

  //Calculate the width for the navbar
  var navw = 'calc(' + w + ' - ' + this.navbar.padding.left + 'px - ' + this.navbar.padding.right + 'px)';

  //Resize the navbar
  $('#' + this.navbar.id).css('width', navw);
  $('#' + this.navbar.id).height(this.navbar.height);

  //Set the navbar padding
  $('#' + this.navbar.id).css('padding-left', this.navbar.padding.left);
  $('#' + this.navbar.id).css('padding-right', this.navbar.padding.right);

  //Resize the svg
  $('#' + this.svg.id).width(w);
  $('#' + this.svg.id).height(parseInt(h));

  //Resize the table
  $('#' + this.table.id).width(this.table.width);
  //$('#' + this.table.id).height(this.table.height);

  //Check for show
  $('#' + this.table.id).css('display', (this.table.show === true)? 'block': 'none');

  //Resize the loading div
  $('#' + this.loading.id).width(this.loading.width);
  $('#' + this.loading.id).height(this.loading.height);

  //Resize the loading screen div
  $('#' + this.loadingscreen.id).width(this.loadingscreen.width);
  $('#' + this.loadingscreen.id).height(this.loadingscreen.height);

  //Calculate the width for the foot
  var foow = 'calc(' + w + ' - ' + this.foot.padding.left + ' - ' + this.foot.padding.right + ')';

  //Resize the foot
  $('#' + this.foot.id).css('width', foow);
  $('#' + this.foot.id).height(this.foot.height);

  //Set the navbar padding
  $('#' + this.foot.id).css('padding-left', this.foot.padding.left);
  $('#' + this.foot.id).css('padding-right', this.foot.padding.right);

  //Set the line Height
  $('#' + this.foot.id).css('line-height', '' + this.foot.height + 'px');

  //Call the resize event
  this.Resize();
};
