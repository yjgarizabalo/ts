type operations =  'multiplicacion' |'suma' | 'division'
type Result = number

const calculator = (a:number, b: number, op: operations): Result => {
  if (op === 'multiplicacion') return a*b
  if (op === 'suma') return a+b

  if (op == 'division') {
    if (b===0) throw new Error('no puedes dividir entren 0')
    return a/b
  }
  
  throw new Error('Opcion invalida')
}

const resultado = calculator(0.14285714285714285, 7, 'multiplicacion')
console.log(resultado);

