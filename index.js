console.log('dwd')

let calculator_div = document.querySelector('.calculator');
let result_var = "";


let input_field = document.querySelector('input');

calculator_div.addEventListener('click', (e)=>{
    if(e.target.className.includes('calc_btn')){
        console.log(e.target)

        switch (e.target.id){
            case "result":
                if(result_var != undefined && result_var.trim() != ""){
                    result_var = eval(result_var);
                    input_field.value = result_var;
                }
                return
            case "ac":
                result_var = ""
                input_field.value = result_var;
                return
            case "del":
                try{
                    let result_arr = result_var.split("")
                    result_arr.pop()
                    result_var = result_arr.join("")
                }catch{
                    result_var = ""
                    input_field.value = result_var;
                }
                input_field.value = result_var;
                return 
        }

        result_var += `${e.target.id}`
        input_field.value = result_var;
    }
})
