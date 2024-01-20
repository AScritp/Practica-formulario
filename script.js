function cambiarRestricciones() {
    var opcionesSelect = document.getElementById("opciones");
    var campoInput = document.getElementById("campo");
  
    // Obtener el valor seleccionado
    var opcionSeleccionada = opcionesSelect.value;
  
    // Limpiar restricciones actuales
    campoInput.removeAttribute("pattern");
  
    // Aplicar restricciones según la opción seleccionada
    if (opcionSeleccionada === "opcion1") {
      campoInput.setAttribute("pattern", "[A-Za-z]{3,}");
    } else if (opcionSeleccionada === "opcion2") {
      campoInput.setAttribute("pattern", "[0-9]{5,}");
    }
  }
  
  function renderizarCampos() {
    const AcompañantesSelect = document.getElementById("acompañantes");
    const camposExtraContainer = document.getElementById("camposExtra");
  
    // Limpiar campos existentes
    camposExtraContainer.innerHTML = "";
  
    // Obtener el número de repeticiones seleccionado
    const numAcompañantes = parseInt(AcompañantesSelect.value);
  
    // Renderizar los campos adicionales
    for (var i = 1; i <= numAcompañantes; i++) {
       
       //APARTADO TITULO INICIO
      const section= document.createElement("h2");
      section.textContent="Datos de acompañante " + i;
       //APARTADO TITULO FIN


       //APARTADO NOMBRE INICIO
      const name= document.createElement("div");
      name.className="name";
      const nuevoCampoName = document.createElement("input");
      nuevoCampoName.type = "text";
      nuevoCampoName.placeholder = "Nombre ";
      nuevoCampoName.name ="Nombre";
      name.appendChild(nuevoCampoName);
       //APARTADO NOMBRE FIN


        //APARTADO APELLIDOS INICIO
      const lastnames= document.createElement("div");
      lastnames.className="name";
      const nuevoCampoLast1 = document.createElement("input");
      nuevoCampoLast1.type = "text";
      nuevoCampoLast1.placeholder = "Primer Apellido ";
      nuevoCampoLast1.name =  "Primer Apellido";
      const nuevoCampoLast2 = document.createElement("input");
      nuevoCampoLast2.type = "text";
      nuevoCampoLast2.placeholder = "Segundo Apellido ";
      nuevoCampoLast2.name =  "Segundo Apellido";


      lastnames.appendChild(nuevoCampoLast1);
      lastnames.appendChild(nuevoCampoLast2);

        //APARTADO APELLIDOS FIN


        // APARTADO DOCUMENTO DE INDENTIDAD INICIO
        const DOCUMENTOID= document.createElement("div");
        DOCUMENTOID.className="DOMCUMENTO-IDENTIDAD";

        var nuevoSelect = document.createElement("select");
        nuevoSelect.id = "opciones";
        nuevoSelect.onchange = cambiarRestricciones;
        var opcion1 = document.createElement("option");
        opcion1.value = "opcion1";
        opcion1.textContent = "Opción 1";
        nuevoSelect.appendChild(opcion1);
        var opcion2 = document.createElement("option");
        opcion2.value = "opcion2";
        opcion2.textContent = "Opción 2";
        nuevoSelect.appendChild(opcion2);
      
    
        var nuevoInput = document.createElement("input");
        nuevoInput.id = "campo";
        nuevoInput.type = "text";
        nuevoInput.name = "DOMCUMENTO-de-ID"
        nuevoInput.required = true;
        DOCUMENTOID.appendChild(nuevoSelect);
        DOCUMENTOID.appendChild(nuevoInput);
        // APARTADO DOCUMENTO DE INDENTIDAD INICIO



        //APARTADO DE DATOS A RENDERIZAR INICIO
      camposExtraContainer.appendChild(section);
      camposExtraContainer.appendChild(name);
      camposExtraContainer.appendChild(lastnames);
      camposExtraContainer.appendChild(DOCUMENTOID);

        //APARTADO DE DATOS A RENDERIZAR FIN

      
      
    }
  }

 