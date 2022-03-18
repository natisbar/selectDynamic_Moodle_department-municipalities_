//SCRIPT DEPARTAMENTS/MUNICIPALITIES

const ID_SELECT_DEPARTAMENT = "id_profile_field_departamento";
const ID_SELECT_MUNICIPALITY = "id_profile_field_municipio";
const ID_CONTAINER_MUNICIPALITY = "fitem_id_profile_field_municipio";
const ID_CONTAINER_DEPARTAMENT = "fitem_id_profile_field_departamento";
const ID_SELECT_COUNTRY = "id_country";
const SELECTED_COUNTRY = "CO";
const ID_JQUERY = "#";
const URL_JSON_DEPARTAMENTS_AND_MUNICIPALITIES = "http://localhost/testCode2/list_departamentsAndMunicipalities.json";
const DOES_NOT_APPLY = "DOES NOT APPLY";
var selectedMuniciality = $(ID_JQUERY+ID_SELECT_MUNICIPALITY).val();
var selectedDepartament = $(ID_JQUERY+ID_SELECT_DEPARTAMENT).val();
var changeCount = 0;

// remove input city, it is no necesary
$('label[for=id_city], input#id_city').remove();

hideContainerMunicipalities();


//Evaluation of change in the select (departament, municipality and country)
$(ID_JQUERY+ID_SELECT_DEPARTAMENT).change(function(){
    selectedDepartament = ($(ID_JQUERY+ID_SELECT_DEPARTAMENT).val() == DOES_NOT_APPLY || $(ID_JQUERY+ID_SELECT_DEPARTAMENT).val() == '') ? selectedDepartament : $(ID_JQUERY+ID_SELECT_DEPARTAMENT).val();
    hideContainerMunicipalities();
});

$(ID_JQUERY+ID_SELECT_MUNICIPALITY).change(function(){
    selectedMuniciality = $(ID_JQUERY+ID_SELECT_MUNICIPALITY).val();
});

$(ID_JQUERY+ID_SELECT_COUNTRY).change(function(){
    municipalitiesSelection();
    if($(ID_JQUERY+ID_SELECT_COUNTRY).val() == SELECTED_COUNTRY){
        changeSelectValue(selectedDepartament, ID_SELECT_DEPARTAMENT);
    }
    
});

//removes and creates municipalities according to the department
function municipalitiesSelection(){
    let select;
    //if the country select is equal to the country that I want to validate, then I create the municipalities for the department
    if(SELECTED_COUNTRY.length > 0 && SELECTED_COUNTRY.length != null){
        if($(ID_JQUERY+ID_SELECT_COUNTRY).val() == SELECTED_COUNTRY){  
            $(ID_JQUERY+ID_CONTAINER_DEPARTAMENT).show(); 
            $(ID_JQUERY+ID_CONTAINER_MUNICIPALITY).show(); 
            $(ID_JQUERY+ID_SELECT_DEPARTAMENT+" option[value='" + DOES_NOT_APPLY+"']").hide()
            $(ID_JQUERY+ID_SELECT_MUNICIPALITY).find("option").remove();
            
            //open JSON
            $.getJSON(URL_JSON_DEPARTAMENTS_AND_MUNICIPALITIES, function(departaments) {
                select = document.getElementById(ID_SELECT_MUNICIPALITY);
                let keyToSearch = $(ID_JQUERY+ID_SELECT_DEPARTAMENT).val();
                // var keyToSearchClean = keyToSearch.replace(/ /g, "").replace(/\./g,"");
                Object.values(departaments).forEach(departament => {
                    if(departament.name == keyToSearch){
                        createAndBuildOption(select, "","Elegir...");
                        departament.relatedElements.sort().forEach(municipality => {
                            createAndBuildOption(select, municipality, municipality);
                        });
                    }
                });
                changeSelectValue(selectedMuniciality, ID_SELECT_MUNICIPALITY);
            });
        }
        /*If the user indicates that he is not in Colombia, it is not possible to display the 
        selected department and municipality, and both selects are changed to: DOES NOT APPLY.*/
        else{
            select = document.getElementById(ID_SELECT_MUNICIPALITY);
            createAndBuildOption(select, DOES_NOT_APPLY, DOES_NOT_APPLY);
            $(ID_JQUERY+ID_CONTAINER_MUNICIPALITY).hide();
            $(ID_JQUERY+ID_CONTAINER_DEPARTAMENT).hide();
            $(ID_JQUERY+ID_SELECT_DEPARTAMENT).val(DOES_NOT_APPLY).change();
            $(ID_JQUERY+ID_SELECT_MUNICIPALITY).val(DOES_NOT_APPLY).change();
        }
    } 
}

function createAndBuildOption(select, value, text){
    let option = document.createElement('option');
    option.value = value;
    option.innerHTML = text;
    select.appendChild(option);
}

function changeSelectValue(selected, id){
    if(selected.length>0){
        $(ID_JQUERY+id).val(selected).change();
    }
}

function hideContainerMunicipalities(){
    if($(ID_JQUERY+ID_SELECT_DEPARTAMENT).val() == '' || $(ID_JQUERY+ID_SELECT_DEPARTAMENT).val() == null){
        $(ID_JQUERY+ID_SELECT_DEPARTAMENT+" option[value='" + DOES_NOT_APPLY+"']").hide()
        $(ID_JQUERY+ID_CONTAINER_MUNICIPALITY).hide();
    }
    else{
        municipalitiesSelection();
    }
}
