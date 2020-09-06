const text = new Blotter.Text('Digital.',{
    family:'Arial Black',
    size:64,
    fill: '#3344b3',
})


const material = new Blotter.FliesMaterial();
if(window.devicePixelRatio > 1){
    material.uniforms.uPointCellWidth.value = 0.016;
    material.uniforms.uPointRadius.value = 1.5;
    material.uniforms.uSpeed.value = 2;
}else{
    material.uniforms.uPointCellWidth.value = 0.02089;
    material.uniforms.uPointRadius.value = 10;  
    material.uniforms.uSpeed.value = 2;
}

const blotter = new Blotter(material, {
    texts: text
})

const scope = blotter.forText(text);
scope.appendTo(document.querySelector('i'));