


    function escada(){

    let simbols = []
    let input = document.getElementById("valor")
    let valor = input.value

    for (let i = 0; i< valor; i++){

        if (i !== '*'){
            simbols[i] = '*'
            
            let lista = document.getElementById('result')
            let item = document.createElement('h2')
            item.appendChild(document.createTextNode(simbols.join('')))
            lista.appendChild(item)
                
        }
    }
        disableBtn()

    }

    
    function disableBtn() {

            let result = document.getElementById("result").value

            if(result !== null){

            document.getElementById("btn").setAttribute("onclick", '')

            }
        }


    function restart(){
        let result=   document.getElementById("result")
        result.innerHTML = ''
        
        let input = document.getElementById("valor").value = ''

        enableBtn()
        
        }

    function enableBtn(){

            document.getElementById("btn").setAttribute('onclick', 'escada()')
        }


    








