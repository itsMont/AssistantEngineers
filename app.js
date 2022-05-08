let opciones = [
      "La <b>integral</b> de $$cot(x)</i> = ln(sec(x))+c$$",
      "La identidad de $$sen^2(x) = 1-cos&sup2(x)$$",
      "La derivada de $$ln(x)^2 = {2\\over a} $$", "La derivada de $$e^{x^2} = ex^2 \\cdot 2x$$",
      "En la regla de sustitución debemos poner todos los términos en <i>a</i>.",
      "La derivada $$(ln(2x) + 4x^3) = {1\\over x} + 12x^2$$ para este se aplica la regla de la suma o diferencia que es $$(f \\pm g)' = f' \\pm g'$$",
      "La antiderivada de $$tan^{-1}(x) = {1\\over x^2 + 1}$$",
      "La integral de $$tan^2(x) = tan(x) - x + c$$",
      "La fórmula de multiplicación por una constante es $$\\int af'(x)dx = a\\int f' (x)dx = af(x) + c$$",
      "La integral definida se resuelve de la siguiente manera $$\\int_{a}^{b} f'(x)dx = f(b) - f(a)$$",
      "Las cantidades físicas fundamentales de las cuales derivan el resto son: <ul><li>Longitud</li> <li>Masa</li> <li>Tiempo</li></ul>",
      "Si tenemos un ángulo en el eje x, la componente <i>y</i> siempre estará relacionada con el seno y la componente <i>x</i> con el coseno.",
      "Las tres leyes de Newton son: <ul>  <li>Ley de inercia</li> <li>Ley de fuerzas</li><li>Ley de acción-reacción</li> </ul>",
      "Un cuerpo en equilibrio tiene una aceleración = 0.",
      "La fuerza normal (N) solo está presente cuando hay una superficie en contacto.",
      "Si un cuerpo está en reposo la sumatoria de sus fuerzas $$\\sum fx, \\sum fy$$ es igual a 0.",
      "La velocidad de un objeto es el cambio de posición en función del tiempo.",
      "Algunas de las ecuaciones usadas para movimiento acelerado a &#8800 0 son: $$a={v-v_0 \\over t}$$ $$v = v_0 + at$$	$$x = x_0 + {(v+v_o)t\\over 2}$$ $$v^2 = {v_0}^2 - 2a\\triangle x$$",
      "La diferencia entre la variable nominal y la ordinal, es que la nominal no admite un orden, mientras que la ordinal sí.",
      "La media es la suma de los datos que se tienen de algún problema <b>dividido</b> entre el número total de datos.  "
]
let opcion = opciones[Math.floor(Math.random() * opciones.length)]
let mensaje = opcion

const parrafo = document.getElementById("sabiasQue")
parrafo.innerHTML = mensaje

