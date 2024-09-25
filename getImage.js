
function getImage(props){

    if (props.isSample === true){
        // dataset, method, size, alpha, marker
        return `https://imoumoulidou.github.io/user_study/${props.dataset}/sampling_methods/${props.method}/${props.method}_${props.size}_alpha_${props.alpha}_marker_${props.marker}.png`
    }
    else {
        return `https://imoumoulidou.github.io/user_study/${props.dataset}/sampling_methods/${props.method}/${props.method}_${props.size}_alpha_${props.alpha}_marker_${props.marker}.png`
    }

}