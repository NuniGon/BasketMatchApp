  function leerJSON(){
            var selected = $('#cdd').val();
 
            var fjson = 'http://www.opendatacanarias.es/datos/dataset/06e67b96-c473-43cc-a881-ad4030955eef/resource/415245a0-3213-410c-9839-02b7e00175ef/download/camposdebaloncesto.json';

             star = $.getJSON(fjson, function(data){
                  if(selected == ['adeje']){
                       document.getElementById('datos').innerHTML= JSON.stringify(data['COD','0'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'],'\t');  
                  }
                 if(selected == ['arona']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=2;i<6;i++){
                       document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                    }
                  }
                  if(selected == ['arafo']){
                     document.getElementById('datos').innerHTML = JSON.stringify(data['COD','1'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                  if(selected == ['buenavista']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','6'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                  if(selected == ['candelaria']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','7'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                  if(selected == ['rosario']){
                     document.getElementById('datos').innerHTML= "";
                     for(var i=8;i<10;i++){
                         document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }    
                  }
                   if(selected == ['sauzal']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','10'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['garachico']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','11'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['granadilla']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','12'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['guimar']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','13'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['icod']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','14'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['matanza']){
                     document.getElementById('datos').innerHTML= "";
                      for(var i=17;i<19;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['orotava']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=19;i<22;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['victoria']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','22'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['realejos']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=23;i<25;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['puerto']){
                     document.getElementById('datos').innerHTML= "";
                      for(var i=25;i<27;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['laguna']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=27;i<46;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['abona']){
                      document.getElementById('datos').innerHTML= JSON.stringify(data['COD','46'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['santacruz']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=47;i<65;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['santaursula']){
                     document.getElementById('datos').innerHTML= JSON.stringify(data['COD','65'],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');  
                  }
                   if(selected == ['santiago']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=66;i<68;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['tacoronte']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=68;i<71;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
                   if(selected == ['tegueste']){
                     document.getElementById('datos').innerHTML= "";
                    for(var i=71;i<73;i++){
                           document.getElementById('datos').innerHTML= document.getElementById('datos').innerHTML +  "<br><br>" + JSON.stringify(data['COD',i],['First_NOM_','First_DIR_','First_POB1', 'LONGDEC', 'LATDEC'], '\t');
                      }
                  }
          //  document.getElementById('datos').innerHTML =JSON.stringify(data);  //muesrta todos los datos
           });
      };





        function readJSON(){
            var selected = $('#ocdd').val();
            var fjson = 'http://www.opendatacanarias.es/datos/dataset/d1561851-ddaf-4baf-9cf7-a2fb956006f7/resource/e5dd2575-7352-404b-bee4-69f57e9eff36/download/camposdefutbol.json';

            var star = $.getJSON(fjson, function(data){
              if(selected == ['adeje']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=0;i<4;i++){
                    document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                  }
              }
              if(selected == ['arona']){
                 document.getElementById('odatos').innerHTML= "";
                for(var i=6;i<14;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                }
              }
              if(selected == ['arafo']){
                  document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '4'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t'); 
              }
              if(selected == ['arico']){
                    document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '5'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');  
              }
             if(selected == ['buenavista']){
                 document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '14'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
              }
              if(selected == ['candelaria']){
                 document.getElementById('odatos').innerHTML= "";
                for(var i=15;i<17;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                }
              }
              if(selected == ['rosario']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=17;i<19;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['sauzal']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=19;i<21;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['tanque']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=21;i<23;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['fasnia']){
                  document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '23'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
              }
              if(selected == ['garachico']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=24;i<26;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                }  
              }
              if(selected == ['granadilla']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=26;i<30;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['isora']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=30;i<34;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['guimar']){
                 document.getElementById('odatos').innerHTML= "";
                  for(var i=34;i<36;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                }  
              }
              if(selected == ['icod']){
                 document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '36'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t'); 
              }
              if(selected == ['guancha']){
                     document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '37'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t'); 
              }
              if(selected == ['matanza']){
                     document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '38'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t'); 
              }
              if(selected == ['orotava']){
                 document.getElementById('odatos').innerHTML= "";
                for(var i=39;i<43;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['victoria']){
                     document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '43'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');   
              }
              if(selected == ['realejos']){
                 document.getElementById('odatos').innerHTML= "";
                 for(var i=44;i<49;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['silos']){
                     document.getElementById('odatos').innerHTML= JSON.stringify(data['N_DEF', '49'],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t'); 
              }
              if(selected == ['puerto']){
                 document.getElementById('odatos').innerHTML= "";
                for(var i=50;i<53;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['laguna']){
                 document.getElementById('odatos').innerHTML= "";
                 for(var i=53;i<74;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['sanjuan']){
                 document.getElementById('odatos').innerHTML= "";
                 for(var i=74;i<76;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }
              if(selected == ['abona']){
                 document.getElementById('odatos').innerHTML= "";
                for(var i=76;i<81;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                }   
              }
              if(selected == ['santacruz']){
                 document.getElementById('odatos').innerHTML= "";
                for(var i=81;i<100;i++){
                  document.getElementById('odatos').innerHTML= document.getElementById('odatos').innerHTML +  "<br><br>" +JSON.stringify(data['N_DEF', i],['DENOMINACIÓN CAMPO DE FÚTBOL','DIRECCIÓN','HORARIO DE USO','TFNO','LONGDEC','LATDEC'], '\t');
                } 
              }

           });
      };