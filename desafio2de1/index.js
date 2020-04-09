    function calcularaps(){
            var inputnome = document.getElementById('nome'); 
            var selectSexo = document.getElementById('sexo');
            var inputidade  = document.getElementById('idade');
            var inputcontribuição = document.getElementById('contribuição');   
            var h1 = document.getElementById("resultado")
                          
            
                var resultado = (Number(inputidade.value) + Number(inputcontribuição.value))

                    if(selectSexo.value == "M"  && resultado >= 85) {
                        h1.innerHTML = `Parabéns ${inputnome.value}, você pode se aposentar!`
                    }else if (selectSexo.value == "H"  && resultado >= 95) {
                        h1.innerHTML = `Parabéns ${inputnome.value}, você pode se aposentar!`
                    }else { 
                        
                        h1.innerHTML = `${inputnome.value}, você não pode se aposentar!`
                        
                    }
            }

    