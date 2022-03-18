# Block_configuration_moodle

### **Tested on Moodle 3.10.9, but it is functional in other versions**
### **Support this development 🤝 [Paypal](https://www.paypal.com/paypalme/natisbar)**
### **Contact: natalia.barbosa3005@hotmail.com**

### [ENGLISH]
in construction...

Performance/running video: [script_select_dinamic](https://www.loom.com/share/94586e44dc534516b568302d4edc359c)

GoogleSheet with Departaments and Municipalities: [GoogleSheet List](https://docs.google.com/spreadsheets/d/12ABI-WekB5FjCZ7cfc8KprPz42bxO71BXE6Xde6t5e4/edit?usp=sharing)

#### *If you have any difficulties, you can indicate me to support you.*


### [SPANISH]

Este desarrollo, tiene como finalidad solucionar uno de los inconvenientes de Moodle, asociado a la dependencia de los valores a mostrar en un select, de acuerdo con otro. Este script específicamente, permite relacionar n numero de municipios a un departamento, lo que facilita la cuantificación de la procedencia(lugar de residencia) de los usuarios que hacen uso de nuestro Moodle.

Para el uso de este script, es necesario definir un JSON con la relacion de departamentos y municipios ([GoogleSheet List](https://docs.google.com/spreadsheets/d/12ABI-WekB5FjCZ7cfc8KprPz42bxO71BXE6Xde6t5e4/edit?usp=sharing)), de la siguiente manera:
```
{
    "AMAZONAS": {
        "name": "AMAZONAS",
        "relatedElements": [ "EL ENCANTO", "LA CHORRERA", "LA PEDRERA", "LA VICTORIA", "LETICIA", "MIRITI - PARANÁ", "PUERTO ALEGRIA", "PUERTO ARICA", "PUERTO NARIÑO", "PUERTO SANTANDER", "TARAPACÁ" ]
    },   
    "ANTIOQUIA": {
        "name": "ANTIOQUIA",
        "relatedElements": [ "CÁCERES", "CAUCASIA", "EL BAGRE", "NECHÍ", "TARAZÁ", "ZARAGOZA", "CARACOLÍ", "MACEO", "PUERTO BERRÍO", "PUERTO NARE", "PUERTO TRIUNFO", "YONDÓ", "AMALFI", "ANORÍ", "CISNEROS", "REMEDIOS", "SAN ROQUE", "SANTO DOMINGO", "SEGOVIA", "VEGACHÍ", "YALÍ", "YOLOMBÓ", "ANGOSTURA", "BELMIRA", "BRICEÑO", "CAMPAMENTO", "CAROLINA", "DON MATÍAS", "ENTRERRIOS", "GÓMEZ PLATA", "GUADALUPE", "ITUANGO", "SAN ANDRÉS", "SAN JOSÉ DE LA MONTAÑA", "SAN PEDRO", "SANTA ROSA DE OSOS", "TOLEDO", "VALDIVIA", "YARUMAL", "ABRIAQUÍ", "ANZA", "ARMENIA", "BURITICÁ", "CAÑASGORDAS", "DABEIBA", "EBÉJICO", "FRONTINO", "GIRALDO", "HELICONIA", "LIBORINA", "OLAYA", "PEQUE", "SABANALARGA", "SAN JERÓNIMO", "SANTAFÉ DE ANTIOQUIA", "SOPETRÁN", "URAMITA", "ABEJORRAL", "ALEJANDRÍA", "ARGELIA", "CARMEN DE VIBORAL", "COCORNÁ", "CONCEPCIÓN", "GRANADA", "GUARNE", "GUATAPE", "LA CEJA", "LA UNIÓN", "MARINILLA", "NARIÑO", "PEÑOL", "RETIRO", "RIONEGRO", "SAN CARLOS", "SAN FRANCISCO", "SAN LUIS", "SAN RAFAEL", "SAN VICENTE", "SANTUARIO", "SONSON", "AMAGÁ", "ANDES", "ANGELOPOLIS", "BETANIA", "BETULIA", "CAICEDO", "CARAMANTA", "CIUDAD BOLÍVAR", "CONCORDIA", "FREDONIA", "HISPANIA", "JARDÍN", "JERICÓ", "LA PINTADA", "MONTEBELLO", "PUEBLORRICO", "SALGAR", "SANTA BaRBARA", "TÁMESIS", "TARSO", "TITIRIBÍ", "URRAO", "VALPARAISO", "VENECIA", "APARTADÓ", "ARBOLETES", "CAREPA", "CHIGORODÓ", "MURINDÓ", "MUTATA", "NECOCLÍ", "SAN JUAN DE URABA", "SAN PEDRO DE URABA", "TURBO", "VIGÍA DEL FUERTE", "BARBOSA", "BELLO", "CALDAS", "COPACABANA", "ENVIGADO", "GIRARDOTA", "ITAGUI", "LA ESTRELLA", "MEDELLÍN", "SABANETA" ]
    },
    "ARAUCA": {
        "name": "ARAUCA",
        "relatedElements": [ "ARAUCA", "ARAUQUITA", "CRAVO NORTE", "FORTUL", "PUERTO RONDÓN", "SARAVENA", "TAME" ]
    }
}
```
El JSON está estructurado como un tipo de dato objeto, de la siguiente manera :
1. Primero se define el departamento.
2. Dentro de este es necesario definir 2 valores, el name y los relatedElements. Donde:
 - name es el nombre del departamento.
 - relatedElements, es el array de municipios que pertenecen a ese departamento.



### Proceso de incorporación.

1. Cree 2 nuevos campos de perfil de usuario (departamento / municipio), en nombre corto ud está definiendo el ID, así que si lo cambia, es decir, no hace uso de departamento y municipio, asegurese de modificar las constantes definidas en el script.   En estos dos nuevos campos, debe definir la lista de departamentos y municipios según correspona, y en ambos casos agregar una opcion extra: DOES NOT APPLY.
![alt text](https://github.com/natisbar/selectDynamic_Moodle_department-municipalities_/blob/master/departamentList.png?raw=true)

2. En HTML Adicional, en la sección "Dentro del HEAD", incorpore la librería jQuery: <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
3. Dentro del script actualice la URL de su JSON en la const correspondiente, y asegúrese de definir el pais sobre el que trabajará, pues actualmente está diseñado para COLOMBIA (ver const SELECTED_COUNTRY = "CO")
4. En "Antes del cierre del BODY" incorpore el [script](https://github.com/natisbar/selectDynamic_Moodle_department-municipalities_/blob/main/list_departamentsAndMunicipalities.json) dentro de las etiquetas <script></script>

#### *Si tienen alguna dificultad, pueden indicarme y miramos de que manera puedo apoyarlo.*
