// const methods = ['random', 'max_min', 'density_biased', 'vas', 'blue_noise', 'perception_aware'];

function getImage(props){

    if (props.isSample === true){
        // dataset, method, size, alpha, marker
        return `https://imoumoulidou.github.io/user_study/${props.dataset}/sampling_methods/${props.method}/${props.method}_${props.size}_alpha_${props.alpha}_marker_${props.marker}.png`
    }
    else {
        return `https://imoumoulidou.github.io/user_study/${props.dataset}/original_data/${props.dataset}_alpha_${props.alpha}_marker_${props.marker}.png`
    }

}

function updateImage(props){
    // props: {dataset, method, size, alpha, marker, isSample, id}
    let filepath = getImage(props);
	
	//console.log(filepath);
	
	document.getElementById(props.id).src = filepath;
}

function buildQuestion1(questionId){
    let questionDiv = document.getElementById(questionId).getElementsByClassName('QuestionText')[0];

    // console.log(questionDiv)

    let row = document.createElement('div');
    row.className = 'row';

    let leftColumn = document.createElement('div');
    leftColumn.className = 'col-6';

    let orig_image = document.createElement('img');
    orig_image.id = 'orig';
    orig_image.height = 1200;
    orig_image.width = 1400;

    let orig_slider = document.createElement('input');
    orig_slider.type = 'range';
    orig_slider.id = 'orig_alpha_slider';
    orig_slider.className = 'form-range';
    orig_slider.min = 1;
    orig_slider.max = 10;
    orig_slider.step = 3;
    orig_slider.value = 10;

    let orig_text = document.createElement('p');
    orig_text.id = 'orig_alpha_text';
    orig_text.innerHTML = 'Transparency: 1.0';

    leftColumn.append(orig_image);
    leftColumn.append(orig_slider);
    leftColumn.append(orig_text);

    let rightColumn = document.createElement('div');
    rightColumn.className = 'col-6';

    let sample_index = 1;
    let sample_names = ['A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i < 2; i++){
        let new_row = document.createElement('div');
        new_row.className = 'row';

        for(let j = 0; j < 3; j++){
            let new_col = document.createElement('div');
            new_col.className = 'col-4 text-center';

            let new_col_image = document.createElement('img');
            new_col_image.id = 'sample_' + sample_index;
            new_col_image.height = 600;
            new_col_image.width = 700;

            let new_col_text = document.createElement('h3');
            new_col_text.innerHTML = sample_names[sample_index-1];

            new_col.append(new_col_image);
            new_col.append(new_col_text);

            new_row.append(new_col);

            sample_index++;
        }

        rightColumn.append(new_row);
    }
    

    row.append(leftColumn);
    row.append(rightColumn);

    // console.log(row)

    questionDiv.append(row);

}

function buildQuestion2(questionId){
    let questionDiv = document.getElementById(questionId).getElementsByClassName('QuestionText')[0];

    // console.log(questionDiv)

    let row = document.createElement('div');
    row.className = 'row';

    let leftColumn = document.createElement('div');
    leftColumn.className = 'col-6';

    let orig_image = document.createElement('img');
    orig_image.id = 'orig';
    orig_image.height = 1200;
    orig_image.width = 1400;

    let orig_slider = document.createElement('input');
    orig_slider.type = 'range';
    orig_slider.id = 'orig_alpha_slider';
    orig_slider.className = 'form-range';
    orig_slider.min = 1;
    orig_slider.max = 10;
    orig_slider.step = 3;
    orig_slider.value = 10;

    let orig_text = document.createElement('p');
    orig_text.id = 'orig_alpha_text';
    orig_text.innerHTML = 'Transparency: 1.0';

    leftColumn.append(orig_image);
    leftColumn.append(orig_slider);
    leftColumn.append(orig_text);

    let rightColumn = document.createElement('div');
    rightColumn.className = 'col-6';

    let sample_index = 1;
    let sample_names = ['A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i < 2; i++){
        let new_row = document.createElement('div');
        new_row.className = 'row';

        for(let j = 0; j < 3; j++){
            let new_col = document.createElement('div');
            new_col.className = 'col-4 text-center';

            let new_col_image = document.createElement('img');
            new_col_image.id = 'sample_' + sample_index;
            new_col_image.height = 600;
            new_col_image.width = 700;

            let new_col_text = document.createElement('h3');
            new_col_text.innerHTML = sample_names[sample_index-1];

            new_col.append(new_col_image);
            new_col.append(new_col_text);

            new_row.append(new_col);

            sample_index++;
        }

        rightColumn.append(new_row);
    }
    

    row.append(leftColumn);
    row.append(rightColumn);

    // console.log(row)

    questionDiv.append(row);

}


// function setupQuestion(questionNum, questionId){
//     if(questionNum == 1) buildQuestion1(questionId);
//     else buildQuestion1(questionId)
	
// 	let orig_alpha = '1.0', sample_alpha = '1.0';
// 	let dataset = 'hidden_corr';
// 	let marker_size = 16;
// 	let sample_size = 1898;
	
// 	updateImage({
// 		isSample: false,
// 		dataset: dataset,
// 		alpha: orig_alpha,
// 		marker: marker_size,
// 		id: 'orig'
// 	});
	
// 	for(let i = 1; i <= 6; i++){
// 		updateImage({
// 			isSample: true,
// 			dataset: dataset,
// 			method: methods[i-1],
// 			size: sample_size,
// 			alpha: sample_alpha,
// 			marker: marker_size,
// 			id: 'sample_' + i
// 		})
// 	}
	
// 	document.getElementById('orig_alpha_slider').oninput = function(){
// 		// console.log(this.value);
		
// 		updateImage({
// 			isSample: false,
// 			dataset: dataset,
// 			alpha: (this.value / 10).toFixed(1),
// 			marker: marker_size,
// 			id: 'orig'
// 		});
		
// 		document.getElementById('orig_alpha_text').innerHTML = 'Transparency: ' + (this.value / 10).toFixed(1);
// 	}
	
// 	// console.log(this.questionId);

// }

