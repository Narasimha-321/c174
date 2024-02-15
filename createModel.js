AFRAME.registerComponent("createmodels", {
//create init function 
init: async function () {

  //Get the compund details of the element
  var createModel = await this.getModel();

  var barcodes = Object.keys(createModel);

  barcodes.map(barcode => {
    var element = createModel[barcode];
        //Call the function
        this.createModels(model);
      });
  
    },









  getModels: function() {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  createModel: function(model) {
       //add the code
     var barcodeValue = model.barcode_value;
     var modelUr1=model.model_url;
     var modelName = model.model_name;

     var scene =document.querySelector("a-scene");

     var marker = document.createElement("a-marker");

     marker.setAttribute("id",'marker-${moselName}');
     marker.setAttribute("type", "barcode");
     marker.setAttribute("model_name", modelName);
     marker.setAttribute("value", barcodeValue);
     marker.setAttribute("markerhandler",{});
     scene.appendChild(marker);

     if (barcodeValue===0){
      var modelEl =document. createElement ( "a-entity" ) ;
      modelEl.setAttribute(" id" ,'${mode1Name}');
      modelEl. setAttribute(" geometry " ,{
      primitive: "box",
      width: model.width,
      height: model.height
     });
      modelEl. setAttribute(" position " ,model.position);
      modelEl. setAttribute(" rotation " ,model.position);
      modelEl. setAttribute("material " , {
        color: model.color
    });
    marker.appendChild(modelEl);
  } else {
    var modelEl = document.createElement("a-entity");
    modelEl. setAttribute( " id" ,'${modelName}');
    modelEl. setAttribute( "gltf-model" ,'url (${modelurl})' ) ;
    modelEl.setAttribute( "scale", model. scale);
    modelEl.setAttribute( "position", model. position);
    modelEl.setAttribute( "rotation", model. rotation);
    marker. appendChi1d(modelEl) ;
  }




  }
   

});
