// =================================================================================
//				FLOATING POINT ERROR's with ATO
// =================================================================================
// Floating points:
// https://docs.python.org/release/2.5.1/tut/node16.html
// console.log('51/1000: ' + 51/1000);
// console.log('51*0.01: ' + 51*0.01);
// console.log('51*0.001: ' + 51*0.001);
// console.log('51*0.0001: ' + 51*0.0001);
//
// Exampels of floatingpoint errors:
// http://stackoverflow.com/questions/2100490/floating-point-inaccuracy-examples
// https://www.w3schools.com/js/js_numbers.asp
// 
// Handle floating point errors:
// https://www.soa.org/News-and-Publications/Newsletters/Compact/2014/may/Losing-My-Precision--Tips-For-Handling-Tricky-Floating-Point-Arithmetic.aspx
// http://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
// function handleFloatingpoint(num, numOfDecimals, numOfZeros) {
// 	var strNum = num.toString();

// }

// function handleFloatingpoint2(a, b) {
// 	return (a*10 + b*10)/10;
// }
// console.log('floatingPointTest 1: ' + String(0.2));
// console.log('floatingPointTest 2: ' + String(0.1 + 0.2));
// console.log('floatingPointTest 3: ' + String((0.1*10 + 0.2*10)/10));
// console.log('floatingPointTest 4: ' + handleFloatingpoint2(0.1, 0.2));

// console.log('floatingPointTest 5: ' + String(0.1 * 10 * 0.2 * 10 / 100));

// =================================================================================
//				PROGRAM
// =================================================================================

// TOGGLE / SWITCH:
// http://www.bootstraptoggle.com/
// https://proto.io/freebies/onoff/

// TOGGLE / SWITCH google search:
// css toggle switch example


// =================================================================================
//				BUGS
// =================================================================================

// Hvis man gentagende gange trykker på "Næst", så vil sidste microhint (med svaret til kursisten) ikke forsvinde ved "klik" på body.
// unitsInWords() virker ikke efter hensigten!




// https://www.vucdigital.dk/kvuc_vucUdvikling/kvuc_vucUdvikling.html



function template() {

	var HTML = '';

	console.log('template - jsonData: ' + JSON.stringify(jsonData)); 

	HTML += '<h1>'+jsonData.header+'</h1>';
	
	HTML += instruction(jsonData.instruction);
	HTML += explanation(jsonData.explanation);

	// HTML += '<div class="Clear"></div>';
	// HTML += '<div id="interface">';
	// HTML += 	'<div id="question"></div>';
	// HTML += 	'<div class="row upperRow">'; 
	// HTML += 		'<div class="column leftColumn col-xs-5 col-md-5">'; 
	// HTML += 			'<div id="dropZone_symbol" class="dropZone">'; 
	// HTML += 			'</div>';
	// HTML += 		'</div>';
	// HTML += 		'<div class="column centerColumn col-xs-2 col-md-2">'; 
	// HTML += 			'<h4 id="centerText">måles i</h4>';
	// HTML += 		'</div>';
	// HTML += 		'<div class="fraction column rightColumn col-xs-5 col-md-5">'; 
	// HTML += 			'<div id="dropZone_nominator" class="dropZone">'; 
	// HTML += 			'</div>';
	// HTML += 			'<div id="fractionLine">'; 
	// HTML += 			'</div>';
	// HTML += 			'<div id="dropZone_denominator" class="dropZone">'; 
	// HTML += 			'</div>';
	// HTML += 		'</div>';
	// HTML += 	'</div>';
	// HTML += 	'<div class="row lowerRow">';
	// HTML += 		'<div id="symbolContainer" class="column leftColumn col-xs-5 col-md-5">'; 
	// HTML += 		'</div>';
	// HTML += 		'<div class="column centerColumn col-xs-2 col-md-2">'; 
	// HTML += 		'</div>';
	// HTML += 		'<div id="unitContainer" class="column rightColumn col-xs-5 col-md-5">'; 
	// HTML += 		'</div>';
	// HTML += 	'</div>';
	// HTML += 	'<input type="checkbox" checked data-toggle="toggle" data-on="Hello<br>World" data-off="Goodbye<br>World"><div id="toggleFraction" class="btn btn-info">Indsæt brøkstreg</div>';
	// HTML += '</div>';

	// MARK 23-03-2017

	HTML += '<div class="Clear"></div>';
	HTML += '<div id="question" class="h3"></div>';
	HTML += '<div id="interface">';
	HTML += 	'<div class="row upperRow">'; 
	HTML += 		'<div id="headerContainer"><h4 id="symbolHeader">Fysiske størrelser</h4><h4 id="unitHeader">Enheder</h4></div>';
	HTML += 		'<div class="column leftColumn">'; 
	HTML += 			'<div id="dropZone_symbol" class="dropZone">'; 
	HTML += 			'</div>';
	HTML += 		'</div>';
	HTML += 		'<div class="column centerColumn">'; 
	HTML += 			'<span id="centerText">måles i</span>';
	HTML += 		'</div>';
	HTML += 		'<div class="column rightColumn">'; 
	HTML += 			'<div id="dropZone_nominator" class="dropZone">'; 
	HTML += 			'</div>';
	HTML += 			'<div id="fractionLine">'; 
	HTML += 			'</div>';
	HTML += 			'<div id="dropZone_denominator" class="dropZone">'; 
	HTML += 			'</div>';
	HTML += 		'</div>';
	HTML += 	'</div>';
	HTML += 	'<div class="row lowerRow">';
	HTML += 		'<div id="symbolContainer" class="column leftColumn">'; 
	HTML += 		'</div>';
	HTML += 		'<div class="column centerColumn">'; 
	HTML += 		'</div>';
	HTML += 		'<div id="unitContainer" class="column rightColumn">';
	// HTML += 		 	'<div id="toggleFraction" class="btn btn-info">brøkstreg</div>';	
	HTML += 			'<div id="dropperbel_unitContainer"></div>';
	HTML += 		 	'<div id="toggleFraction"><span id="toggleFraction_text">Brøkstreg</span>'+onoffswitch('TIL', 'FRA', false)+'</div>';
	HTML += 		'</div>';
	HTML += 	'</div>';
	HTML += 	'<div id="nextQuestion" class="btn btn-primary">Næste</div><b>spørgsmål:</b> <span id="questionCount"></span>';
	// HTML += 	'<div id="nextQuestion_cheat" class="btn btn-info">Næste</div>';
	HTML += '</div>';
	// HTML += '<div id="latex_prep_container_symbol" class="hidden"></div>';
	// HTML += '<div id="latex_prep_container_unit" class="hidden"></div>';

	$('#interfaceContainer').html(HTML);
}





function elementInArray(tArray, element){
    for (x in tArray){
        if (tArray[x] == element) return true 
    }
    return false;
}


function makeDraggable_symbols(quizNo, symbol, answerSymbolOrUnit){
	console.log('makeDraggable_symbols - CALLED');
	var jdgs = jsonData.genericSymbol;
	console.log('makeDraggable_symbols - jdgs: ' + JSON.stringify(jdgs));
	var jdq = jsonData.qObj[quizNo];
	console.log('makeDraggable_symbols - jdq: ' + JSON.stringify(jdq));
	var HTML = '';
	for (var n in jdgs) {
		if (jdq.hasOwnProperty('exclude_genericSymbol')) {
			console.log('makeDraggable_symbols - A0');
			if (!elementInArray(jdq.exclude_genericSymbol, n)) {
				console.log('makeDraggable_symbols - A1');
				HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="draggable_entity symbol label label-default '+(((jdgs[n].sym == symbol) && (!elementInArray(answerSymbolOrUnit, symbol)))?' symbol_OK':'')+'">\\('+jdgs[n].sym+'\\)</span>';
				// HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="draggable_entity symbol label label-default '+((jdgs[n].sym == symbol)?' symbol_OK':'')+'">\\(\\bf{'+jdgs[n].sym+'}\\)</span>';
			} else {
				console.log('makeDraggable_symbols - A2');
				console.log('makeDraggable_symbols - excluded: ' + JSON.stringify(jdgs[n]));
			}
		} else {
			console.log('makeDraggable_symbols - A3');
			HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="draggable_entity symbol label label-default '+(((jdgs[n].sym == symbol) && (!elementInArray(answerSymbolOrUnit, symbol)))?' symbol_OK':'')+'">\\('+jdgs[n].sym+'\\)</span>';
			// HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="draggable_entity symbol label label-default '+((jdgs[n].sym == symbol)?' symbol_OK':'')+'">\\(\\bf{'+jdgs[n].sym+'}\\)</span>';
		}
		// eObj.symDb[eObj.entityId] = jdgs[n].sym;  // COMMENTED OUT 4/4-2017
		++eObj.entityId;
	}
	$('#symbolContainer').html(HTML);
}


function makeDraggable_units(quizNo, unit, answerSymbolOrUnit){
	console.log('makeDraggable_units - CALLED');
	var jdgu = jsonData.genericUnit;
	console.log('makeDraggable_units - jdgu: ' + JSON.stringify(jdgu));
	var jdq = jsonData.qObj[quizNo];
	console.log('makeDraggable_units - jdq: ' + JSON.stringify(jdq));
	var HTML = '';
	var nomAndDenom = unit.nominator.concat(unit.denominator);
	console.log('makeDraggable_units - nomAndDenom: ' + JSON.stringify(nomAndDenom));
	for (var n in jdgu) {
		if (jdq.hasOwnProperty('exclude_genericUnit')) {
			console.log('makeDraggable_units - A0');
			if (!elementInArray(jdq.exclude_genericUnit, n)) {
				console.log('makeDraggable_units - A1');
				HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="XXXXX draggable_entity unit label label-default '+(((elementInArray(unit.nominator, jdgu[n].sym)) && (!elementInArray(answerSymbolOrUnit, jdgu[n].sym)))?' nominator_OK':'')+(((elementInArray(unit.denominator, jdgu[n].sym)) && (!elementInArray(answerSymbolOrUnit, jdgu[n].sym)))?' denominator_OK':'')+'">\\(\\mathrm{'+jdgu[n].sym+'}\\)</span>';
				// HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="draggable_entity unit label label-default '+((elementInArray(unit.nominator, jdgu[n].sym))?' nominator_OK':'')+((elementInArray(unit.denominator, jdgu[n].sym))?' denominator_OK':'')+'">\\(\\mathrm{\\bf{'+jdgu[n].sym+'}}\\)</span>';
			} else {
				console.log('makeDraggable_units - A2');
				console.log('makeDraggable_units - excluded: ' + JSON.stringify(jdgu[n]));
			}
		} else {
			console.log('makeDraggable_units - A3');
			HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="XXXXX draggable_entity unit label label-default '+(((elementInArray(unit.nominator, jdgu[n].sym)) && (!elementInArray(answerSymbolOrUnit, jdgu[n].sym)))?' nominator_OK':'')+(((elementInArray(unit.denominator, jdgu[n].sym)) && (!elementInArray(answerSymbolOrUnit, jdgu[n].sym)))?' denominator_OK':'')+'">\\(\\mathrm{'+jdgu[n].sym+'}\\)</span>';
			// HTML += '<span id="'+eObj.entityId+'" data-entity-id="'+eObj.entityId+'" class="draggable_entity unit label label-default '+((elementInArray(unit.nominator, jdgu[n].sym))?' nominator_OK':'')+((elementInArray(unit.denominator, jdgu[n].sym))?' denominator_OK':'')+'">\\(\\mathrm{\\bf{'+jdgu[n].sym+'}}\\)</span>';
		}
		// eObj.symDb[eObj.entityId] = jdgu[n].sym;  // COMMENTED OUT 4/4-2017
		++eObj.entityId;
	}
	// $('#unitContainer').html(HTML);
	// $('#unitContainer').prepend(HTML);
	$('#dropperbel_unitContainer').html(HTML);
}


function resetAcceptedDraggable_units(quizNo, unit){

    $('.unit').removeClass('nominator_OK denominator_OK');  // Remove all previous "nominator_OK" and "denominator_OK".

    console.log('resetAcceptedDraggable_units - CALLED');
    var jdgu = jsonData.genericUnit;
    console.log('resetAcceptedDraggable_units - jdgu: ' + JSON.stringify(jdgu));
    var jdq = jsonData.qObj[quizNo];
    console.log('resetAcceptedDraggable_units - jdq: ' + JSON.stringify(jdq));
    var HTML = '';
    var nomAndDenom = unit.nominator.concat(unit.denominator);
    console.log('resetAcceptedDraggable_units - nomAndDenom: ' + JSON.stringify(nomAndDenom));
    console.log('resetAcceptedDraggable_units - unit 1: ' + JSON.stringify(unit));

    var TentityId = parseInt($('.symbol:last').prop('id')); // This sets this dummy counter to the id-value of the last symbol
    console.log('resetAcceptedDraggable_units - TentityId: ' + TentityId);
    
    for (var n in jdgu) {
    	++TentityId;      // <---- IMPORTANT: increase dummy counter by one here!
        if (jdq.hasOwnProperty('exclude_genericUnit')) {
            console.log('resetAcceptedDraggable_units - A0');
            if (!elementInArray(jdq.exclude_genericUnit, n)) {
                console.log('resetAcceptedDraggable_units - A1');
                HTML += '<span id="'+TentityId+'" data-entity-id="'+TentityId+'" class="draggable_entity unit label label-default '+((elementInArray(unit.nominator, jdgu[n].sym))?' nominator_OK':'')+((elementInArray(unit.denominator, jdgu[n].sym))?' denominator_OK':'')+'">\\(\\mathrm{'+jdgu[n].sym+'}\\)</span>';
                if (elementInArray(unit.nominator, jdgu[n].sym)) { 
                    console.log('resetAcceptedDraggable_units - A2');
                    $('#'+TentityId).addClass('nominator_OK');
                }
                if (elementInArray(unit.denominator, jdgu[n].sym)) { 
                    console.log('resetAcceptedDraggable_units - A3');
                    $('#'+TentityId).addClass('denominator_OK');
                }
            } else {
                console.log('resetAcceptedDraggable_units - A2');
                console.log('resetAcceptedDraggable_units - excluded: ' + JSON.stringify(jdgu[n]));
            }
        } else {
            console.log('resetAcceptedDraggable_units - A4');
            HTML += '<span id="'+TentityId+'" data-entity-id="'+TentityId+'" class="draggable_entity unit label label-default '+((elementInArray(unit.nominator, jdgu[n].sym))?' nominator_OK':'')+((elementInArray(unit.denominator, jdgu[n].sym))?' denominator_OK':'')+'">\\(\\mathrm{'+jdgu[n].sym+'}\\)</span>';
            if (elementInArray(unit.nominator, jdgu[n].sym)) { 
                console.log('resetAcceptedDraggable_units - A5');
                $('#'+TentityId).addClass('nominator_OK');
            }
            if (elementInArray(unit.denominator, jdgu[n].sym)) { 
                console.log('resetAcceptedDraggable_units - A6');
                $('#'+TentityId).addClass('denominator_OK');
            }
        }
    }
    console.log('resetAcceptedDraggable_units - unit 2: ' + JSON.stringify(unit));
}


function returnGenericSymbolIndex(symbol) {
	for (var n in jsonData.genericSymbol) {
		if (jsonData.genericSymbol[n] == symbol) {
			return parseInt(n);
		}
	}
}


function getAnswerSymbolAndUnits(quizNo){
	console.log('getAnswerSymbolAndUnits - CALLED');
	var jdgs = jsonData.genericSymbol;
	console.log('getAnswerSymbolAndUnits - jdgs: ' + JSON.stringify(jdgs));
	var jdq = jsonData.qObj[quizNo];
	console.log('getAnswerSymbolAndUnits - jdq: ' + JSON.stringify(jdq));
	var genericSymbolNo = jdq.quiz_genericSymbol;
	console.log('getAnswerSymbolAndUnits - genericSymbolNo: ' + genericSymbolNo);
	var genericSymbolObj = jdgs[genericSymbolNo];
	console.log('getAnswerSymbolAndUnits - genericSymbolObj: ' + JSON.stringify(genericSymbolObj));

	var symbol = genericSymbolObj.sym;

	var nominator = [], denominator = [];
	// if (genericSymbolObj.unit[0].hasOwnProperty('nominator')) {
	if (genericSymbolObj.unit[0].hasOwnProperty('denominator')) {
		nominator = (typeof(genericSymbolObj.unit[0].nominator) === 'string')? genericSymbolObj.unit[0].nominator.split('*') : genericSymbolObj.unit[0].nominator ;
		denominator = (typeof(genericSymbolObj.unit[0].denominator) === 'string')? genericSymbolObj.unit[0].denominator.split('*') : genericSymbolObj.unit[0].denominator;
	} else {
		nominator = genericSymbolObj.unit[0];
	}
	console.log('getAnswerSymbolAndUnits - symbol: ' + symbol + ', nominator: ' + JSON.stringify(nominator) + ', denominator: ' + JSON.stringify(denominator));

	return {symbol: symbol, unit: {nominator: nominator, denominator: denominator}};
}


function setAnswerUnits(quizNo, choosenUnit){
	console.log('setAnswerUnits - CALLED');
	var jdgs = jsonData.genericSymbol;
	console.log('setAnswerUnits - jdgs: ' + JSON.stringify(jdgs));
	var jdq = jsonData.qObj[quizNo];
	console.log('setAnswerUnits - jdq: ' + JSON.stringify(jdq));
	var genericSymbolNo = jdq.quiz_genericSymbol;
	console.log('setAnswerUnits - genericSymbolNo: ' + genericSymbolNo);
	var genericSymbolObj = jdgs[genericSymbolNo];
	console.log('setAnswerUnits - genericSymbolObj: ' + JSON.stringify(genericSymbolObj));

	var symbol = genericSymbolObj.sym;

	var nominator = [], denominator = [];
	
	if (genericSymbolObj.unit[choosenUnit].hasOwnProperty('denominator')) {
		nominator = nominator.concat((typeof(genericSymbolObj.unit[choosenUnit].nominator) === 'string')? genericSymbolObj.unit[choosenUnit].nominator.split('*') : genericSymbolObj.unit[choosenUnit].nominator) ;
		denominator = denominator.concat((typeof(genericSymbolObj.unit[choosenUnit].denominator) === 'string')? genericSymbolObj.unit[choosenUnit].denominator.split('*') : genericSymbolObj.unit[choosenUnit].denominator);
	} else {
		nominator = nominator.concat(typeof(genericSymbolObj.unit[choosenUnit]) === 'string')? genericSymbolObj.unit[choosenUnit].split('*') : genericSymbolObj.unit[choosenUnit];
	}
	
	console.log('setAnswerUnits - symbol: ' + symbol + ', nominator: ' + JSON.stringify(nominator) + ', denominator: ' + JSON.stringify(denominator));

	return {symbol: symbol, unit: {nominator: nominator, denominator: denominator}};
}


function getAnswerSymbolAndUnits_2(quizNo){
	console.log('getAnswerSymbolAndUnits_2 - CALLED');
	var jdgs = jsonData.genericSymbol;
	console.log('getAnswerSymbolAndUnits_2 - jdgs: ' + JSON.stringify(jdgs));
	var jdq = jsonData.qObj[quizNo];
	console.log('getAnswerSymbolAndUnits_2 - jdq: ' + JSON.stringify(jdq));
	var genericSymbolNo = jdq.quiz_genericSymbol;
	console.log('getAnswerSymbolAndUnits_2 - genericSymbolNo: ' + genericSymbolNo);
	var genericSymbolObj = jdgs[genericSymbolNo];
	console.log('getAnswerSymbolAndUnits_2 - genericSymbolObj: ' + JSON.stringify(genericSymbolObj));

	var symbol = genericSymbolObj.sym;

	var nominator = [], denominator = [];
	for (var n in genericSymbolObj.unit) {
		// if (genericSymbolObj.unit[n].hasOwnProperty('nominator')) {
		if (genericSymbolObj.unit[n].hasOwnProperty('denominator')) {
			nominator = nominator.concat((typeof(genericSymbolObj.unit[n].nominator) === 'string')? genericSymbolObj.unit[n].nominator.split('*') : genericSymbolObj.unit[n].nominator) ;
			denominator = denominator.concat((typeof(genericSymbolObj.unit[n].denominator) === 'string')? genericSymbolObj.unit[n].denominator.split('*') : genericSymbolObj.unit[n].denominator);
		} else {
			// nominator = nominator.concat(genericSymbolObj.unit[n]);
			nominator = nominator.concat(typeof(genericSymbolObj.unit[n]) === 'string')? genericSymbolObj.unit[n].split('*') : genericSymbolObj.unit[n];
		}
	}
	console.log('getAnswerSymbolAndUnits_2 - symbol: ' + symbol + ', nominator: ' + JSON.stringify(nominator) + ', denominator: ' + JSON.stringify(denominator));

	return {symbol: symbol, unit: {nominator: nominator, denominator: denominator}};
}


/*
 *  If there are more than one way of setting the units of the symbol AND one way has been found, then the index of the way is returned. Else null is returned.
 *	E.g. if "unit": [{"nominator": "A", "denominator": "B"},{"nominator": "C", "denominator": "D"}], and unit "A" or "B" is dropped in the dropzone, then 0 is returned. If unit "C" or "D" is dropped in the dropzone, then 1 is returned.
 */
function findChoosenUnits(quizNo, idOfDroppedUnit) {
	console.log('findChoosenUnits - CALLED');
	var jdgs = jsonData.genericSymbol;
	console.log('findChoosenUnits - jdgs: ' + JSON.stringify(jdgs));
	var jdq = jsonData.qObj[quizNo];
	console.log('findChoosenUnits - jdq: ' + JSON.stringify(jdq));
	var genericSymbolNo = jdq.quiz_genericSymbol;
	console.log('findChoosenUnits - genericSymbolNo: ' + genericSymbolNo);
	var genericSymbolObj = jdgs[genericSymbolNo];
	console.log('findChoosenUnits - genericSymbolObj: ' + JSON.stringify(genericSymbolObj));

	var sym = eObj.symDb[idOfDroppedUnit];

	var choosenUnitsArr = [];

	var nominator, denominator;
	for (var n in genericSymbolObj.unit) {
		console.log('findChoosenUnits - n: ' + n + ', sym: ' + sym + ', genericSymbolObj.unit: ' + JSON.stringify(genericSymbolObj.unit));
		choosenUnitsArr.push(false);
		if (genericSymbolObj.unit[n].hasOwnProperty('denominator')) {
			console.log('findChoosenUnits - genericSymbolObj.unit[n].nominator: ' + JSON.stringify(genericSymbolObj.unit[n].nominator));
			
			nominator = (typeof(genericSymbolObj.unit[n].nominator) === 'string')? genericSymbolObj.unit[n].nominator.split('*') : genericSymbolObj.unit[n].nominator;
			if (elementInArray(nominator, sym)){
				console.log('findChoosenUnits - A1');
				choosenUnitsArr[n] = true;
			}

			denominator = (typeof(genericSymbolObj.unit[n].denominator) === 'string')? genericSymbolObj.unit[n].denominator.split('*') : genericSymbolObj.unit[n].denominator;
			if (elementInArray(denominator, sym)){
				choosenUnitsArr[n] = true;
			}
		} else {
			nominator = (typeof(genericSymbolObj.unit[n]) === 'string')? genericSymbolObj.unit[n].split('*') : genericSymbolObj.unit[n];
			if (elementInArray(nominator, sym)){
				choosenUnitsArr[n] = true;
			}
		}
	}
	console.log('findChoosenUnits - choosenUnitsArr: ' + choosenUnitsArr);

	var choosenUnit = null, count = 0;
	for (var n in choosenUnitsArr) {
		if (choosenUnitsArr[n]) {
			++count;
			choosenUnit = n;
		}
	}

	choosenUnit = ((genericSymbolObj.unit.length > 1) && (count == 1))? choosenUnit : null; // If there are more than one way of setting the units of the symbol AND one way has been found, then return choosenUnit. Else return null.
	console.log('findChoosenUnits - choosenUnit: ' + choosenUnit);

	return choosenUnit;
}


function resolveExponentsOfUnitsIntoLowerOrders_array(symbolArr) {
	var TsymbolArr = [];
	for (var n in symbolArr) {
		TsymbolArr = TsymbolArr.concat(resolveExponentsOfUnitsIntoLowerOrders(symbolArr[n]));
	}
	console.log('resolveExponentsOfUnitsIntoLowerOrders_array - TsymbolArr: ' + JSON.stringify(TsymbolArr));
}
resolveExponentsOfUnitsIntoLowerOrders_array(['kg', 'm^3', 's^3']);


function resolveExponentsOfUnitsIntoLowerOrders(symbol) {  // Only use this for units and NOT symbols
	var index = symbol.indexOf('^');
	var symbolArr = [symbol];
	if (index !== -1) {
		var base = symbol.substring(0,index);
		var exponent = symbol.substring(index+1);
		
		symbolArr = [];  // Empty the array...

		for (var i = 1; i <= exponent; i++) {
			symbolArr.push( (i==1)? base : base+'^'+i );
		};
		console.log('resolveExponentsOfUnitsIntoLowerOrders - base: ' + base + ', exponent: ' + exponent);
	}
	console.log('resolveExponentsOfUnitsIntoLowerOrders - symbolArr: ' + JSON.stringify(symbolArr));
	return symbolArr;
}
resolveExponentsOfUnitsIntoLowerOrders('m^3');
resolveExponentsOfUnitsIntoLowerOrders('m^2');
resolveExponentsOfUnitsIntoLowerOrders('kg');


function autoHideFractionAndDenominator(unit){
	if (unit.denominator.length == 0) {
		$('#fractionLine').hide();
		$('#dropZone_denominator').hide();
		// $('#dropZone_nominator').css({'margin-top':'7%'});
		$('#dropZone_nominator').css({'position':'relative', 'top': '25%'});
		$('.upperRow .rightColumn').removeClass('fraction');  // ADDED 4/4-2017
	} else {
		$('#fractionLine').show();
		$('#dropZone_denominator').show();
		// $('#dropZone_nominator').css({'margin-top':'1%'});
		$('#dropZone_nominator').css({'position':'relative', 'top': '3%'});
		$('.upperRow .rightColumn').addClass('fraction');   // ADDED 4/4-2017
	}
}

function hideFractionAndDenominator(){
	$('#fractionLine').hide();
	$('#dropZone_denominator').hide();
	$('#dropZone_nominator').css({'position':'relative', 'top': '25%'});
}


function toggleFractionAndDenominator(){

	console.log('toggleFractionAndDenominator - TRANSITION - CLICKED');

	//// KODE FØR TOGGLE-SWITCH
	// if ($('.upperRow .rightColumn').hasClass('fraction')) {
	// 	$('#fractionLine').fadeOut();
	// 	$('#dropZone_denominator').fadeOut( "slow", function() {
	// 		// $('#dropZone_nominator').css({'margin-top':'7%'});
	// 		$('#dropZone_nominator').animate({'position':'relative', 'top': '25%'});
	// 		$('.upperRow .rightColumn').toggleClass('fraction');
	// 		$('#myonoffswitch').removeAttr('checked');
	// 	});
	// } else {
	// 	$('#dropZone_nominator').animate({'position':'relative', 'top': '3%'}, 500, function() {
	// 		$('#fractionLine').fadeIn();
	// 		$('#dropZone_denominator').fadeIn();
	// 		$('.upperRow .rightColumn').toggleClass('fraction');
	// 		$('#myonoffswitch').attr('checked', 'checked');
	// 	});
	// }


	//// SIMPEL SHOW/HIDE
	// if ($('.upperRow .rightColumn').hasClass('fraction')) {
	// 	$('#fractionLine').hide();
	// 	$('#dropZone_denominator').hide();
	// 	$('#dropZone_nominator').css({'position':'relative', 'top': '25%'});
	// 	$('.upperRow .rightColumn').toggleClass('fraction');
	// } else {
	// 	$('#dropZone_nominator').css({'position':'relative', 'top': '3%'});
	// 	$('#fractionLine').show();
	// 	$('#dropZone_denominator').show();
	// 	$('.upperRow .rightColumn').toggleClass('fraction');
	// }

	
	// TOGGLE-SWITCH MED POINTER-CLICK-DEAKTIVERING

	if (typeof(fractionAnimationComplete)==='undefined') {
		window.fractionAnimationComplete = true;
	}

	if (fractionAnimationComplete){
		console.log('toggleFractionAndDenominator - TRANSITION 0');

		fractionAnimationComplete = false;
		$('#toggleFraction').css({'pointer-events': 'none'}); // SEE: https://css-tricks.com/almanac/properties/p/pointer-events/

	 	if ($('.upperRow .rightColumn').hasClass('fraction')) {
	 		console.log('toggleFractionAndDenominator - TRANSITION 1');

	 		// $('#toggleFraction').prepend('<div id="toggleFraction_overlay" style="height: 100%; width: 100%; position: absolute; background-color: #F00; z-index: 10;"></div>');

			$('#fractionLine').fadeOut(500);
			$('#dropZone_denominator').fadeOut( 500, function() {
				$('#dropZone_nominator').animate({'position':'relative', 'top': '25%'}, 500, function() {

					fractionAnimationComplete = true; 
					$('#toggleFraction').css({'pointer-events': 'auto'}); // SEE: https://css-tricks.com/almanac/properties/p/pointer-events/
					console.log('toggleFractionAndDenominator - TIMEOUT');

					$('.upperRow .rightColumn').toggleClass('fraction');
					
					showFractionErrorMsg();

					showTaskFinishedIfFractionError_bugfix();
				});
				// $('.upperRow .rightColumn').toggleClass('fraction');
				// $('#myonoffswitch').removeAttr('checked');
			});
		} else {
			console.log('toggleFractionAndDenominator - TRANSITION 2');

			$('#dropZone_nominator').animate({'position':'relative', 'top': '3%'}, 500, function() {
				$('#fractionLine').fadeIn(500);
				$('#dropZone_denominator').fadeIn( 500, function() {
					fractionAnimationComplete = true; 
					$('#toggleFraction').css({'pointer-events': 'auto'});  // SEE: https://css-tricks.com/almanac/properties/p/pointer-events/
					console.log('toggleFractionAndDenominator - TIMEOUT');

					$('.upperRow .rightColumn').toggleClass('fraction');

					showFractionErrorMsg();

					showTaskFinishedIfFractionError_bugfix();
				});
				// $('.upperRow .rightColumn').toggleClass('fraction');
				// $('#myonoffswitch').attr('checked', 'checked');
			});
		}
	}
	
}


// If there is a fraction error AND the the last dropped entity answers the question/task, then this function triggers a "correct" feedback responce.
function showTaskFinishedIfFractionError_bugfix() {
	eObj.questionAnswered = (eObj.idOfDroppedEntities.length === eObj.answerSymbols.length)? true : false;
    console.log('toggleFraction - questionAnswered: ' + eObj.questionAnswered);

    if (eObj.questionAnswered){
    	console.log("toggleFraction - quizNo: " + eObj.quizNo + ", jsonData.qObj.length: " + jsonData.qObj.length);
    	if (eObj.quizNo < jsonData.qObj.length - 1) {
    		microhint($('#nextQuestion'), "<span class='label_correct_nextQuestion'>Opgaven er løst <b>korrekt!</b> </span><br> Klik for at gå til næste opgave ", "#000"); 
    		addIdToMicrohint();
    	} 
    	else {  // The student has solved/answered ALL questions!
    		++eObj.quizNo;
    		$( ".container-fluid" ).trigger( "click" );
    	}
    }
}


function poseQuestion(quizNo) {
	var jdq = jsonData.qObj[quizNo];
	console.log('poseQuestion - jdq: ' + JSON.stringify(jdq));

	var question = (jdq.hasOwnProperty('question'))? jdq.question : jsonData.genericQuestion;
	console.log('poseQuestion - question 1: ' + question);

	var strArr = question.match(/ text{\w*}/g);

	var prop;
	for (var n in strArr) {
		prop = strArr[n].substring(6,strArr[n].length-1);
		console.log('poseQuestion - prop: ' + prop);
		if (jdq.hasOwnProperty(prop)) {
			console.log('poseQuestion - jq[prop]: ' + jdq[prop]);
			// question = question.replace(new RegExp(strArr[n], 'g'), ' '+jdq[prop]);
			question = question.replace(new RegExp(strArr[n], 'g'), ' <span class="label label-info">'+((eObj.useSynonymes)? shuffelArray(jdq[prop])[0] : jdq[prop][0])+'</span>');
		} else {
			question = question.replace(new RegExp(strArr[n], 'g'), ' - text UNDEFINED - ');
		}
	}
	console.log('poseQuestion - question 2: ' + question);


	$('#question').html(question);
}



function shuffelArray(ItemArray) {
    var NumOfItems = ItemArray.length;
    var NewArray = ItemArray.slice(); // Copy the array...
    var Item2;
    var TempItem1;
    var TempItem2;
    for (var Item1 = 0; Item1 < NumOfItems; Item1++) {
        Item2 = Math.floor(Math.random() * NumOfItems);
        TempItem1 = NewArray[Item1];
        TempItem2 = NewArray[Item2];
        NewArray[Item2] = TempItem1;
        NewArray[Item1] = TempItem2;
    }
    return NewArray;
}
console.log('shuffelArray([0]): ' + shuffelArray([0]));
console.log('shuffelArray([0,1]): ' + shuffelArray([0,1]));



// IMPORTANT: Class "draggable" (and NOT clases: "ui-draggable", "ui-draggable-handle" and "ui-draggable-dragging") makes all the problems of cloning from ouside and into a droppable.
function SimpleClone(TargetSelector) {
    var Clone = $(TargetSelector).clone().removeClass("draggable").css({
        'position': 'absolute',
        // 'height': $(TargetSelector).parent().height()*0.60+'px', // <---- NEW  Set the height to 60% of its parent, unit in px
        // 'width': $(TargetSelector).parent().width()*0.20+'px'    // <---- NEW  Set the width to 20% of its parent, unit in px
    }); // This is necessary for cloning inside the droppable to work properly!!!
    Clone = Clone.removeClass("ui-draggable ui-draggable-handle ui-draggable-dragging draggable_entity symbol_OK nominator_OK denominator_OK").addClass('draggable_entity_clone'); // This just cleans the attributes so the DOM-element looks nicer.
    return Clone;
}


function autoCenterByAjustingLeftPadding(selectorArr) {
	var parentWidth, leftMargin, sumWidth, sum;
	for (var n in selectorArr) {
		$(selectorArr[n]).css({'padding-left': 0});
		console.log('autoCenterByAjustingLeftPadding - selectorArr['+n+']: ' + selectorArr[n]);
		sumWidth = 0;
		$( selectorArr[n] + " .draggable_entity_clone" ).each(function( index, element ) {   // multiplication
			sumWidth += $(element).width();
			sumWidth += parseInt($(element).css('padding-left').replace('px', '')) + parseInt($(element).css('padding-right').replace('px', ''));
			sumWidth += parseInt($(element).css('margin-left').replace('px', '')) + parseInt($(element).css('margin-right').replace('px', ''));
			console.log('autoCenterByAjustingLeftPadding - $(element).text(): ' + $(element).text() + ', sumWidth: ' + sumWidth );
		});
		$( selectorArr[n] + " .multiplication" ).each(function( index, element ) {   // multiplication
			sumWidth += $(element).width();
			sumWidth += parseInt($(element).css('padding-left').replace('px', '')) + parseInt($(element).css('padding-right').replace('px', ''));
			sumWidth += parseInt($(element).css('margin-left').replace('px', '')) + parseInt($(element).css('margin-right').replace('px', ''));
			console.log('autoCenterByAjustingLeftPadding - $(element).text(): ' + $(element).text() + ', sumWidth: ' + sumWidth );
		});
		parentWidth = $(selectorArr[n]).width();
		leftMargin = (parentWidth - sumWidth)/2;
		console.log('autoCenterByAjustingLeftPadding - parentWidth: ' + parentWidth + ', sumWidth: ' + sumWidth  + ', leftMargin: ' + leftMargin);
		$(selectorArr[n]).css({'padding-left': leftMargin});
	}
}


function autoCenterByAjustingLeftPadding_2(selector) {
	var parentWidth, leftMargin, sumWidth, sum;
	
	$(selector).css({'padding-left': 0});
	console.log('autoCenterByAjustingLeftPadding_2 - selector: ' + selector);
	sumWidth = 0;
	$( selector + " .draggable_entity_clone" ).each(function( index, element ) {   // multiplication
		sumWidth += $(element).width();
		sumWidth += parseInt($(element).css('padding-left').replace('px', '')) + parseInt($(element).css('padding-right').replace('px', ''));
		sumWidth += parseInt($(element).css('margin-left').replace('px', '')) + parseInt($(element).css('margin-right').replace('px', ''));
		console.log('autoCenterByAjustingLeftPadding_2 - $(element).text(): ' + $(element).text() + ', sumWidth: ' + sumWidth );
	});
	$( selector + " .multiplication" ).each(function( index, element ) {   // multiplication
		sumWidth += $(element).width();
		sumWidth += parseInt($(element).css('padding-left').replace('px', '')) + parseInt($(element).css('padding-right').replace('px', ''));
		sumWidth += parseInt($(element).css('margin-left').replace('px', '')) + parseInt($(element).css('margin-right').replace('px', ''));
		console.log('autoCenterByAjustingLeftPadding_2 - $(element).text(): ' + $(element).text() + ', sumWidth: ' + sumWidth );
	});
	parentWidth = $(selector).width();
	leftMargin = (parentWidth - sumWidth)/2;
	console.log('autoCenterByAjustingLeftPadding_2 - parentWidth: ' + parentWidth + ', sumWidth: ' + sumWidth  + ', leftMargin: ' + leftMargin);
	$(selector).css({'padding-left': leftMargin});
	
}


function autoCenterByAjustingLeftMargin(selector) {
	var parentWidth, leftMargin, sumWidth, sum;
	
	$(selector).css({'padding-left': 0});
	$(selector + ' .draggable_entity_clone:first-child').css({'margin-left': 0});
	console.log('autoCenterByAjustingLeftMargin - selector: ' + selector);
	sumWidth = 0;
	$( selector + " .draggable_entity_clone" ).each(function( index, element ) {   // multiplication
		sumWidth += $(element).width();
		sumWidth += parseInt($(element).css('padding-left').replace('px', '')) + parseInt($(element).css('padding-right').replace('px', ''));
		sumWidth += parseInt($(element).css('margin-left').replace('px', '')) + parseInt($(element).css('margin-right').replace('px', ''));
		console.log('autoCenterByAjustingLeftMargin - $(element).text(): ' + $(element).text() + ', sumWidth: ' + sumWidth );
	});
	$( selector + " .multiplication" ).each(function( index, element ) {   // multiplication
		sumWidth += $(element).width();
		sumWidth += parseInt($(element).css('padding-left').replace('px', '')) + parseInt($(element).css('padding-right').replace('px', ''));
		sumWidth += parseInt($(element).css('margin-left').replace('px', '')) + parseInt($(element).css('margin-right').replace('px', ''));
		console.log('autoCenterByAjustingLeftMargin - $(element).text(): ' + $(element).text() + ', sumWidth: ' + sumWidth );
	});
	parentWidth = $(selector).width();
	leftMargin = (parentWidth - sumWidth)/2;
	console.log('autoCenterByAjustingLeftMargin - parentWidth: ' + parentWidth + ', sumWidth: ' + sumWidth  + ', leftMargin: ' + leftMargin);
	// $(selector).css({'padding-left': leftMargin});
	$(selector + ' .draggable_entity_clone:first-child').css({'margin-left': leftMargin});
	
}


function autoCenterByAjustingLeftPadding_question(selector) {
	var sumWidth = 0;
	sumWidth += $(selector).width();
	sumWidth += parseInt($(selector).css('padding-left').replace('px', '')) + parseInt($(selector).css('padding-right').replace('px', ''));
	sumWidth += parseInt($(selector).css('margin-left').replace('px', '')) + parseInt($(selector).css('margin-right').replace('px', ''));
	var parentWidth = $(selector).parent().width();
	leftMargin = (parentWidth - sumWidth)/2;
	console.log('autoCenterByAjustingLeftPadding - parentWidth: ' + parentWidth + ', sumWidth: ' + sumWidth  + ', leftMargin: ' + leftMargin);
	$(selector).css({'padding-left': leftMargin});
}


function addMultiplicationSymbol(dropZoneId) {
	var numOfclones = $('#'+dropZoneId + ' .draggable_entity_clone').length;
	var numOfmult = $('#'+dropZoneId + ' .multiplication').length;
	if (numOfclones == numOfmult + 1) {
		// $('#'+dropZoneId).append('<span class="multiplication hidden">\\(\\cdot\\)</span>');  // &#9679;
		$('#'+dropZoneId).append('<span class="multiplication">&#9679;</span>');

		// MathJax.Hub.Queue(["Typeset",MathJax.Hub,$('.multiplication')[0]]);

		// MathJax.Hub.Queue(function (){
		// 	$('.multiplication').removeClass('hidden');
		// });
	}
}

function onoffswitch(onText, offText, checked) {
	var HTML = '';
	HTML += '<div class="onoffswitch">';
    HTML += 	'<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" '+((checked)?'checked':'')+'>';
    HTML += 	'<label class="onoffswitch-label" for="myonoffswitch">';
    HTML += 		'<span class="onoffswitch-inner"></span>';
    HTML += 		'<span class="onoffswitch-switch"></span>';
    HTML += 	'</label>';
    HTML += '</div>';
    HTML += '<style type="text/css">.onoffswitch-inner:before{content:"'+onText+'";} .onoffswitch-inner:after{content:"'+offText+'";} </style>';  // This inserts the onText and offText
    return HTML;
}


function isEntityStillValid(dropZoneId, jqObj) {

	// var entity = jqObj.text();  // This does not work due to MathJax conversion - e.g. "c" becomes "ccc". Use data-entity-id instead!!!
	var symDbIndex = jqObj.attr('data-entity-id');
	console.log('isEntityStillValid - symDbIndex: ' + symDbIndex);

	var entity = eObj.symDb[symDbIndex];

	var symArr = [];
	$(dropZoneId + ' .draggable_entity_clone').each(function( index, element ) {
		symArr.push($(element).text());
	});

	var target = dropZoneId.replace('dropZone_', '');
	var answerArr;
	if (target == 'symbol') {
		answerArr = [eObj.aObj[target]];  // <----- typecast "symbol" from string to array!
	} else {
		answerArr = eObj.aObj.unit[target];
	}

	var entityValid = (elementInArray(answerArr, entity))? false : true;
	console.log('isEntityStillValid - target: ' + target + ', answerArr: ' + JSON.stringify(answerArr) + ', entity: ' + entity + ', entityValid: ' + entityValid);

	return entityValid;
}


function giveFeedback(valid, id, callBack){
    
    // var id = $(this).prop('id').replace('draggable_tRNA_','');


    // dObj.moveObjArr[id].brownianMotion = false;

    // $('#'+id).animate({
    //         left: eObj.posMem.left,
    //         top: eObj.posMem.top,
    //         duration: 0
    // }, function(){
        
    // });

    // $('#draggable_tRNA_'+id).css({left: dObj.xPos, top: dObj.yPos});
    console.log('giveFeedback - id: ' + id);

    // var HTML = 'Negativt feedback...';
    // UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'</p>');

    if (!valid) {  // IMPORTANT: valid = "false" if it is the wrong draggable!
        console.log('giveFeedback - WRONG');
       
    } else {
        console.log('giveFeedback - CORRECT');

    }

    eObj.wrongFeedbackTriggered = true;
    // dObj.idOfWronglyMovedNeucleotide = id;

    // dObj.userMsgBox_click = false;

    callBack();

}


function setHeightOnContainer(selector){
	if (typeof(heightObj)==='undefined') {
		heightObj = {};
	}
	var Tselector = selector.replace('.', '').replace('#', '');
	
	heightObj[Tselector] = $(selector).height();
}


function showFractionErrorMsg() {
	// Check if the fraction on/off is set correct according to the denominator
    if ( ([eObj.aObj.symbol].length == $('#dropZone_symbol .draggable_entity_clone').length) && 
        	 (eObj.aObj.unit.nominator.length == $('#dropZone_nominator .draggable_entity_clone').length) && 
    		(( (eObj.aObj.unit.denominator.length == 0) && ($('.rightColumn').hasClass('fraction')) ) || ( (eObj.aObj.unit.denominator.length > 0) && (!$('.rightColumn').hasClass('fraction')) ) ) 
    ){
    	console.log('entity - REVERT - B0');
    	eObj.questionAnswered = false;
    	eObj.showFractionError = true;
    	// microhint($('#toggleFraction'), "Der er en formfejl i besvarelsen: overvej den fysiske mening af besvarelsen...", "#000");
    	microhint($('#toggleFraction'), "Overvej, om der skal være brøkstreg", "#000"); 
    	addIdToMicrohint();
    }
}


function setEventHandlers(){

	$( ".draggable_entity" ).draggable({

        revert: function(valid) {
            console.log('entity - REVERT');

            var id = parseInt($(this).prop('id'));   // <------- MARK (#3a#) - IMPORTANT: This is beter than (#3b#)
            console.log('setEventHandlers - revert - id: ' + id);

            var dropObj = isDropZoneUnderDraggable(['#dropZone_symbol', '#dropZone_nominator', '#dropZone_denominator'], id);
            console.log('entity - REVERT - dropObj: ' + JSON.stringify(dropObj));


            var jdgs = jsonData.genericSymbol[eObj.quizNo];
            console.log('entity - REVERT - eObj.quizNo: ' + eObj.quizNo + ', jdgs: ' + JSON.stringify(jdgs));


            var TquizNo = jsonData.qObj[eObj.quizNo].quiz_genericSymbol;
	    	var Tjdgs = jsonData.genericSymbol[TquizNo];
	    	console.log('nextQuestion - eObj.quizNo: ' + eObj.quizNo  + ', TquizNo: ' + TquizNo + ', jdgs: ' + JSON.stringify(Tjdgs));


            if ((eObj.showFractionError) && (eObj.showFractionErrorCount >= 1)){   // The condition eObj.showFractionErrorCount >= 1 ensures that no fraction-errors will be shown before 20 sek has passed! After this time all errors are fraction-errors to lead the student toward finding the error.

            	// if (eObj.showFractionErrorCount == 1) {
            	// 	console.log('entity - REVERT - A2');
            	// 	microhint($('#toggleFraction'), "Der er en formfejl i besvarelsen: hvad er definitionen af "+Tjdgs.name[0].toLowerCase()+"?", "#000");
            	// }

            	// if (eObj.showFractionErrorCount == 2) {
            	// 	console.log('entity - REVERT - A2');
            	// 	microhint($('#toggleFraction'), "Der er en formfejl i besvarelsen: hvilke enheder indgår i "+Tjdgs.name[0].toLowerCase()+"?", "#000");
            	// }

            	// if (eObj.showFractionErrorCount >= 3) {
            	// 	console.log('entity - REVERT - A2');
            	// 	microhint($('#toggleFraction'), "Der er en formfejl i besvarelsen: skal brøkstregen være der?", "#000");
            	// }

            	if (eObj.showFractionErrorCount >= 1) {
            		console.log('entity - REVERT - A2');
            		microhint($('#toggleFraction'), 'Hvis enheden indeholder "pr.", skal der være brøkstreg - ellers ikke.', "#000");
            	}

            	addIdToMicrohint();


            	++eObj.showFractionErrorCount;

	            // ATO found the following if-else construct, that solves the error-sound issue. It is a good (but undocumented) way of triggering "events" on drop / not-drop.
	            // SEE:   http://jamesallardice.com/run-a-callback-function-when-a-jquery-ui-draggable-widget-reverts/
            } else if (valid) {
                console.log("Dropped in a valid location - SUCCESS");
                var dropZoneId = dropZoneObj.prop('id');

            	addMultiplicationSymbol(dropZoneId);

                $('#'+dropZoneId).append(SimpleClone($(this)).removeAttr( "style" ).attr('id','dropped_'+eObj.droppedEntityId));
                eObj.idOfDroppedEntities.push(id);
                $(this).css({left: '0px', top: '0px'});


            	var choosenUnit = findChoosenUnits(eObj.quizNo, id);
            	if (choosenUnit !== null) {
            		eObj.aObj = setAnswerUnits(eObj.quizNo, choosenUnit);
            		resetAcceptedDraggable_units(eObj.quizNo, eObj.aObj.unit);
            		eObj.answerSymbols = [eObj.aObj.symbol].concat(eObj.aObj.unit.nominator.concat(eObj.aObj.unit.denominator));
            	}


            	if (!isEntityStillValid(dropZoneId, $(this))){  // This removes classes "symbol_OK", "nominator_OK", "denominator_OK"
            		var target = dropZoneId.replace('dropZone_', '');
            		$(this).removeClass(target+'_OK');
            	}

                autoCenterByAjustingLeftMargin('#'+dropZoneId);
                console.log('Dropped - id: ' + id + ', dropZoneId: ' + dropZoneId + ', eObj.idOfDroppedEntities: ' + JSON.stringify(eObj.idOfDroppedEntities));

                // microhint('#question', "Posetivt feedback...", "red");  	// Does not work
                // microhint($('#dropped_'+eObj.droppedEntityId), "Korrekt placeret!", "#2ABB2A"); // This works!!!
                // UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>Posetivt feedback...</p>');

                eObj.questionAnswered = (eObj.idOfDroppedEntities.length === eObj.answerSymbols.length)? true : false;
                console.log('entity - REVERT - questionAnswered: ' + eObj.questionAnswered);

                // Check if the fraction on/off is set correct according to the denominator
                if ( ([eObj.aObj.symbol].length == $('#dropZone_symbol .draggable_entity_clone').length) && 
                	 (eObj.aObj.unit.nominator.length == $('#dropZone_nominator .draggable_entity_clone').length) && 
                	(( (eObj.aObj.unit.denominator.length == 0) && ($('.rightColumn').hasClass('fraction')) ) || ( (eObj.aObj.unit.denominator.length > 0) && (!$('.rightColumn').hasClass('fraction')) ) ) 
                ){
                	console.log('entity - REVERT - B0');
                	eObj.questionAnswered = false;
                	eObj.showFractionError = true;
                }

                if (eObj.questionAnswered){
                	console.log("entity - REVERT - quizNo: " + eObj.quizNo + ", jsonData.qObj.length: " + jsonData.qObj.length);
                	if (eObj.quizNo < jsonData.qObj.length - 1) {
                		microhint($('#nextQuestion'), "<span class='label_correct_nextQuestion'>Opgaven er løst <b>korrekt!</b> </span><br> Klik for at gå til næste opgave ", "#000"); 
                		addIdToMicrohint();
                	} else {  // The student has solved/answered ALL questions!
                		++eObj.quizNo;
                		$( ".container-fluid" ).trigger( "click" );
                	}
                } else {
                	microhint($('#dropped_'+eObj.droppedEntityId), "<b class='label_correct'>Korrekt</b> placeret!", "#2ABB2A"); // This works!!!
                	addIdToMicrohint();

                	if (eObj.showFractionError) {
                		console.log('entity - REVERT - B1');
	                	eObj.showFractionError_timer = setTimeout(function(){ 
							// microhint($('#toggleFraction'), "Der er en formfejl i besvarelsen: overvej den fysiske mening af besvarelsen...", "#000"); // This works!!!   
							microhint($('#toggleFraction'), "Overvej, om der skal være brøkstreg", "#000");
							addIdToMicrohint();

							++eObj.showFractionErrorCount;

						}, 20000);

						// ++eObj.showFractionErrorCount;
					}
                }

                ++eObj.droppedEntityId;

            } else {
                console.log("Dropped in a invalid location - FALIURE");

                // microhint('#question', "Negativt feedback...", "red");    // Does not work
                // microhint($('#'+id), "Negativt feedback...", "#000");	 // This works!!!
                // UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>Negativt feedback...</p>');

                $('.draggable_entity').draggable( 'disable' );  // COMMENTED OUT 22-03-2017  // diable draggables until a click on the body has been performed.

                console.log('entity - REVERT - A0');

                if (!dropObj.insideDropzone) {  // Handle all student messages for drops OUTSIDE the dropzones.
                	console.log('entity - REVERT - A1');

                	if (eObj.outsideDropzoneCount == 0) {
                		console.log('entity - REVERT - A2');
                		microhint($('#'+id), wrongLabel() + "Træk til en af kasserne for oven!", "#000");
                	}

                	if (eObj.outsideDropzoneCount == 1) {
                		console.log('entity - REVERT - A3');
                		microhint($('#'+id), wrongLabel() + "Du skal trække "+((dropObj.draggableCategory=='symbol')?'denne fysiske størrelse':'denne enhed')+" til en af de stiplede kasser for oven!", "#000");
                	}

                	if (eObj.outsideDropzoneCount >= 2) {
                		console.log('entity - REVERT - A4');
                		microhint($('#'+id), wrongLabel() + "Dette er "+((dropObj.draggableCategory=='symbol')?'en fysisk størrelse':'en enhed')+". Fysisk størrelser skal i kassen til venstre og enheder skal i "+(($('.upperRow .rightColumn').hasClass('fraction'))?'en af kasserne':'kassen')+" til højre!", "#000");
                	}
                	addIdToMicrohint();

                	++eObj.outsideDropzoneCount;

                } else {	// Handle all student messages for drops INSIDE the dropzones.

	                if (!eObj.isCurrentDraggableCorrect) {

	                	// microhint($('#'+id), "Negativt feedback...", "#000");	 // This works!!!   negativeFeedbackCount

	                	console.log('entity - REVERT - isCurrentDraggableCorrect 1: ' + eObj.isCurrentDraggableCorrect);

	                	if (dropObj.draggableCategory=='symbol'){

	                		// if (eObj.negativeFeedbackCount_symbol == 0) {
		                	// 	console.log('entity - REVERT - A5');
		                	// 	microhint($('#'+id), wrongLabel() + "Symbolet er ikke korrekt - prøv igen!", "#000");
		                	// }

		                	// if (eObj.negativeFeedbackCount_symbol == 1) {
		                	// 	console.log('entity - REVERT - A6');
		                	// 	microhint($('#'+id), wrongLabel() + "Symbolet er ikke korrekt. Symboler er desværre udenadslære - prøv igen!", "#000");
		                	// }

		                	// if (eObj.negativeFeedbackCount_symbol >= 2) {
		                	// 	console.log('entity - REVERT - A7');
		                	// 	microhint($('#'+id), wrongLabel() + "Symbolet er ikke korrekt: prøv at slå symbolet op på nettet eller i din lærebog. ", "#000");
		                	// }

		                	if (eObj.negativeFeedbackCount_symbol >= 0) {
		                		console.log('entity - REVERT - A5');
		                		microhint($('#'+id), wrongLabel() + "Den fysiske størrelse er ikke korrekt - prøv igen!", "#000");
		                	}

		                	addIdToMicrohint();

		                	++eObj.negativeFeedbackCount_symbol;

	                	} else {

		                	// if (eObj.negativeFeedbackCount_unit == 0) {
		                	// 	console.log('entity - REVERT - A8');
		                	// 	microhint($('#'+id), wrongLabel() + "Overvej den fysiske mening af besvarelsen...", "#000");
		                	// }

		                	// if (eObj.negativeFeedbackCount_unit == 1) {
		                	// 	console.log('entity - REVERT - A9');
		                	// 	microhint($('#'+id), wrongLabel() + "Hvad er definitionen af "+Tjdgs.name[0].toLowerCase()+"?", "#000");
		                	// }

		                	// if (eObj.negativeFeedbackCount_unit >= 2) {
		                	// 	console.log('entity - REVERT - A10');
		                	// 	microhint($('#'+id), wrongLabel() + "Hvilke enheder indgår i definitionen af "+Tjdgs.name[0].toLowerCase()+"?", "#000");
		                	// }

		            // ############################

		                	if (eObj.negativeFeedbackCount_unit == 0) {
		                		console.log('entity - REVERT - A8');
		                		microhint($('#'+id), wrongLabel() + "Enheden er ikke korrekt - prøv igen!", "#000");
		                	}

		                	if (eObj.negativeFeedbackCount_unit >= 1) {
		                		console.log('entity - REVERT - A9');
		                		microhint($('#'+id), wrongLabel() + "Prøv at søge efter svaret i din lærebog eller på nettet.", "#000");
		                	}

		                	addIdToMicrohint();

		                	++eObj.negativeFeedbackCount_unit;
		                }

	                    // giveFeedback(valid, id, function(valid){  // <------ VIRKER IKKE! Funktionen "delay()" i "giveFeedback()" returnere rigtig nok sit callback når userMsgBox er lukket, men console.log() i MARK (#1#) exekveres med det samme! LØSNING: animer at nukleotiderne flyver tilbage på plads manuelt! ()
	                    //     console.log('revert - valid - giveFeedback');

	                    //     // This makes the neucleotide move again:
	                    //     // dObj.moveObjArr[id].brownianMotion = true;
	                    //     // brownianMotion3(id, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016
	                        
	                    // });

	                    eObj.wrongFeedbackTriggered = true;

	                    // //////////////////////////////////////////////////////////////////////////////////
	                    // //
	                    // //  FORHINDRE "REVERT" - se: http://stackoverflow.com/questions/7056520/with-jquery-uis-draggable-how-do-you-change-the-revert-on-stop
	                    // //
	                    // //  (efter at "revert" er forhindret efter ovenstående metode, så skal draggable animeres tilbage på plads!)
	                    // //
	                    // ////////////////////////////////////////////////////////////////////////////////// 

	                    // $(this).width(dObj.moveObjArr[id].width);    // Re-ajust the width, since JQuery wants to set a new width
	                    // $(this).height(dObj.moveObjArr[id].height);  // Re-ajust the height, since JQuery wants to set a new height
	                    
	                } else {

	                	console.log('entity - REVERT - isCurrentDraggableCorrect 2: ' + eObj.isCurrentDraggableCorrect);

	                    // This makes the correct neucleotide move again:

	                 //    if (eObj.negativeFeedbackCorrectUnitWrongZoneCount == 0) {
	                	// 	console.log('entity - REVERT - A2');
	                	// 	microhint($('#'+id), wrongLabel() + "Overvej den fysiske mening af besvarelsen...", "#000");
	                	// }

	                	// if (eObj.negativeFeedbackCorrectUnitWrongZoneCount == 1) {
	                	// 	console.log('entity - REVERT - A3');
	                	// 	microhint($('#'+id), wrongLabel() + "Hvad er definitionen af "+Tjdgs.name[0].toLowerCase()+"?", "#000");
	                	// }

	                	// if (eObj.negativeFeedbackCorrectUnitWrongZoneCount >= 2) {
	                	// 	console.log('entity - REVERT - A4');
	                	// 	microhint($('#'+id), wrongLabel() + "Hvilke enheder indgår i definitionen af "+Tjdgs.name[0].toLowerCase()+"?", "#000");
	                	// }

	                	if (eObj.negativeFeedbackCorrectUnitWrongZoneCount == 0) {
	                		console.log('entity - REVERT - A2');
	                		microhint($('#'+id), wrongLabel() + "Enheden er ikke korrekt - prøv igen!", "#000");
	                	}

	                	if (eObj.negativeFeedbackCorrectUnitWrongZoneCount >= 1) {
	                		console.log('entity - REVERT - A3');
	                		microhint($('#'+id), wrongLabel() + "Prøv at søge efter svaret i din lærebog eller på nettet.", "#000");
	                	}

	                	addIdToMicrohint();

	                	++eObj.negativeFeedbackCorrectUnitWrongZoneCount;

	                    // valid = true;
	                    // valid = false;
	                }
	            }

	            // valid = true;  // This makes the draggable autorevert even if it is not the right one _AND_ it solves the not-responding-drag-issue on the +second time it is dragged - which happens if revert = false is returned.

	            // var lowerRowPos = $('.lowerRow').offset();
	            // console.log('entity - REVERT - lowerRowPos: ' + JSON.stringify(lowerRowPos) + ', draggablePos_end: ' + JSON.stringify(eObj.draggablePos_end));
	            // $('#'+id).css({left: eObj.draggablePos_end.left - lowerRowPos.left, top: eObj.draggablePos_end.top - lowerRowPos.top});
            }
            
            return valid; // COMMENTED OUT 20/3
            // return true;  // ADDED 20/3 // This makes the draggable autorevert even if it is not the right one _AND_ it solves the not-responding-drag-issue on the +second time it is dragged - which happens if revert = false is returned.


            // return !valid;
            // return false;  // returning "false" prevents revert from happening (eventhough the "revert"-event is called).  // Commented out 30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).

            // return true; // Added  30-11-2016: FR does not want new neucleotides anymore, only replacement of the old ones. See all places with MARK (#4#).
        },
        start: function(event, ui) {
            console.log('entity - START');

            // $('.microhint').fadeOut(600, function(){
            // 	$('.microhint').remove();
            // });
            removeMicrohintFromIdMem(600);

            console.log('start - microhint - REMOVE - microhintRemoveCount: ' + eObj.microhintRemoveCount);
        	++eObj.microhintRemoveCount;

            var baseClass = $(this).attr('class');
            console.log('start - baseClass: ' + baseClass);

            eObj.isCurrentDraggableDropped = false;
            eObj.idOfCurrentDraggable = $(this).prop('id');
            eObj.isCurrentDraggableCorrect = (baseClass.indexOf('_OK') !== -1)? true : false;

            var offset = $(this).offset();
            eObj.posMem.left = offset.left;
            eObj.posMem.top = offset.top;

            eObj.draggablePos_begin = $(this).offset();

            console.log('entity - START - idOfCurrentDraggable: ' + eObj.idOfCurrentDraggable + ', isCurrentDraggableCorrect: ' + eObj.isCurrentDraggableCorrect + ', left: ' + eObj.posMem.left + ', top: ' + eObj.posMem.top);

        },
        stop: function(event, ui) {
            console.log('entity - STOP');

            

        },
        drag: function(event, ui) {
            console.log('entity - DRAG');

            var id = $(this).prop('id');
            var pos = $(this).position();
            var off = $(this).offset();
            console.log('entity - DRAG - id: ' + id + ', pos: ' + JSON.stringify(pos) + ', offset: ' + JSON.stringify(off));

            eObj.draggableOffset = off;

            eObj.draggablePos_end = $(this).offset();
            
        }
    });


    $( "#dropZone_symbol" ).droppable({
        accept: ".symbol_OK",

        drop: function(event, ui) {
            console.log('dropZone_symbol - entity - DROP');
            window.dropZoneObj = $(this);
            eObj.isCurrentDraggableDropped = true;
        } 
    });

    $( "#dropZone_nominator" ).droppable({
        accept: ".nominator_OK",

        drop: function(event, ui) {
            console.log('dropZone_nominator - entity - DROP');
            window.dropZoneObj = $(this);
            eObj.isCurrentDraggableDropped = true;
        } 
    });

    $( "#dropZone_denominator" ).droppable({
        accept: ".denominator_OK",

        drop: function(event, ui) {
            console.log('dropZone_denominator - entity - DROP');
            window.dropZoneObj = $(this);
            eObj.isCurrentDraggableDropped = true;
        } 
    });


 //    $( document ).on('click', "#toggleFraction", function(event){
	// 	toggleFractionAndDenominator();

	// 	if (eObj.showFractionError) {
	// 		eObj.showFractionError = false;
	// 		clearTimeout(eObj.showFractionError_timer);  // Clear the timer


	// 		// ###################################

	// 	}

	// });


	// $(document).on('click', ".MsgBox_bgr", function(event) {

 //        if (eObj.wrongFeedbackTriggered){

 //            console.log('.MsgBox_bgr - CLICKED - wrongFeedbackTriggered');

 //            // This makes the neucleotide move again after failed attempt to drag:
 //            // dObj.moveObjArr[dObj.idOfWronglyMovedNeucleotide].brownianMotion = true;
 //            // brownianMotion3(dObj.idOfWronglyMovedNeucleotide, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016

 //            eObj.wrongFeedbackTriggered = false;

	// 		moveDraggableBackToTheOriginalPosition();
 //        }
 //    });

 //    $(document).on('click', "#UserMsgBox", function(event) {
 //        if (eObj.wrongFeedbackTriggered){

 //        	console.log('.UserMsgBox - CLICKED - wrongFeedbackTriggered - eObj.posMem: ' + JSON.stringify(eObj.posMem));

 //            // This makes the neucleotide move again after failed attempt to drag:
 //            // dObj.moveObjArr[dObj.idOfWronglyMovedNeucleotide].brownianMotion = true;
 //            // brownianMotion3(dObj.idOfWronglyMovedNeucleotide, dObj.duration, dObj.length);  // UNCOMMENT 24-10-2016

 //            eObj.wrongFeedbackTriggered = false;

 //            moveDraggableBackToTheOriginalPosition();
 //        }
 //    });


	
}


function moveDraggableBackToTheOriginalPosition(){
	$('#'+eObj.idOfCurrentDraggable).animate({
		position: 'relative',
        left: 0,
        top: 0,
        duration: 0
    }, function(){
       //  $(this).removeAttr('style').css({'position': 'relative'});  // This does not solve the issue with the "quick drag" of the draggable-entety.
       // $(this).removeAttr('style'); 
    });
}


function isDropZoneUnderDraggable(dropZoneArr, draggableId, valid){

	// The following code calculates the midpoint of a draggable entity:
	// =================================================================
	var draggable_width = $('#'+draggableId).width();
	draggable_width += parseInt($('#'+draggableId).css('padding-left').replace('px', '')) + parseInt($('#'+draggableId).css('padding-right').replace('px', ''));
	// draggable_width += parseInt($('#'+draggableId).css('margin-left').replace('px', '')) + parseInt($('#'+draggableId).css('margin-right').replace('px', ''));  // <--- Margin commeted out since it is not visible, and therefore "oftsets" the calculated center towards the bottom!

	var draggable_height = $('#'+draggableId).height();
	draggable_height += parseInt($('#'+draggableId).css('padding-top').replace('px', '')) + parseInt($('#'+draggableId).css('padding-bottom').replace('px', ''));
	// draggable_height += parseInt($('#'+draggableId).css('margin-top').replace('px', '')) + parseInt($('#'+draggableId).css('margin-bottom').replace('px', ''));  // <--- Margin commeted out since it is not visible, and therefore "oftsets" the calculated center towards the bottom!
	console.log('isDropZoneUnderDraggable - draggable_width: ' + draggable_width + ', draggable_height: ' + draggable_height);

	console.log('isDropZoneUnderDraggable - draggableOffset: ' + JSON.stringify(eObj.draggableOffset));  // <----- NOTE: eObj.draggableOffset is set in the "drag" event above.
	var draggable_center_left = eObj.draggableOffset.left + draggable_width/2;   // <----- NOTE: eObj.draggableOffset is set in the "drag" event above.
	var draggable_center_top = eObj.draggableOffset.top + draggable_height/2;    // <----- NOTE: eObj.draggableOffset is set in the "drag" event above.
	console.log('isDropZoneUnderDraggable - draggable_center_left: ' + draggable_center_left + ', draggable_center_top: ' + draggable_center_top + ', text: ' + $('#'+draggableId).text());
	
	// Determine the category of the draggable: "symbol" og "unit":
	// ============================================================
	var draggableCategory = (($('#'+draggableId).hasClass('symbol'))? 'symbol': '') + (($('#'+draggableId).hasClass('unit'))? 'unit': '');

	// The following code determines wether the dropped entity is inside or outside a dropzone:
	// ========================================================================================
	for (var n in dropZoneArr){
		var dropzone_pos = $(dropZoneArr[n]).offset();
		var dropzone_width = $(dropZoneArr[n]).width();
		var dropzone_height = $(dropZoneArr[n]).height();
		
		console.log('isDropZoneUnderDraggable - '+dropZoneArr[n]+' - upperLeftCorner - left: ' + dropzone_pos.left + ', top: ' + dropzone_pos.top );
		console.log('isDropZoneUnderDraggable - '+dropZoneArr[n]+' - lowerRightCorner - left: ' + String(dropzone_pos.left + dropzone_width) + ', top: ' +String(dropzone_pos.top + dropzone_height) );

		if ((dropzone_pos.left <= draggable_center_left) && (draggable_center_left <= dropzone_pos.left + dropzone_width) && 
			(dropzone_pos.top <= draggable_center_top) && (draggable_center_top <= dropzone_pos.top + dropzone_height)) {

			return {insideDropzone: true, dropZone: dropZoneArr[n], dropped: eObj.isCurrentDraggableDropped, draggableCategory: draggableCategory};
		} 
	}

	return {insideDropzone: false, dropZone: null, dropped: eObj.isCurrentDraggableDropped, draggableCategory: draggableCategory};
}


function basicPosCalc(){

    $( document ).on( "mousemove", function( event ) {
  		$( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
	});

}


function randomSymbolIndex() {
	var indexArr = [];
	var excludeArr = (jsonData.qObj[eObj.quizNo].hasOwnProperty('exclude_genericSymbol'))? jsonData.qObj[eObj.quizNo].exclude_genericSymbol : [];
	for (var i = 0; i < jsonData.genericSymbol.length; i++) {
		if (!elementInArray(excludeArr, i)) {
			indexArr.push(i);
		}
	}
	console.log('randomSymbolIndex - ttt - 1: ' + indexArr);

	indexArr = shuffelArray(indexArr);
	console.log('randomSymbolIndex - ttt - 2: ' + indexArr);

	return indexArr[0];
}


function randomUnitIndex() {
	var indexArr = [];
	var excludeArr = (jsonData.qObj[eObj.quizNo].hasOwnProperty('exclude_genericUnit'))? jsonData.qObj[eObj.quizNo].exclude_genericUnit : [];
	for (var i = jsonData.genericSymbol.length; i < (jsonData.genericUnit.length + jsonData.genericSymbol.length); i++) {
		if (!elementInArray(excludeArr, i-jsonData.genericSymbol.length)) {
			indexArr.push(i);
		}
	}
	console.log('randomUnitIndex - ttt - 1: ' + indexArr);

	indexArr = shuffelArray(indexArr);
	console.log('randomUnitIndex - ttt - 2: ' + indexArr);

	return indexArr[0];
}


function removeMicrohintFromIdMem(timeout) {
	var removeId = (eObj.microhintIdMem.length > 0)? eObj.microhintIdMem[0] : 0;  // If there are elements (ids) in the array, get the oldest id, else set the id to zero (which will remove any rouge microhints).
	console.log('removeMicrohintFromIdMem - microhintIdMem 1: ' + JSON.stringify(eObj.microhintIdMem));
	$('#microhint_'+removeId).fadeOut(600, function(){
    	$('#microhint_'+removeId).remove();
    });
    if (($(".microhint" ).length > 0) && (removeId == 0)) { // Quick bugfix for the situation where microhintIdMem is empty but a rouge microhint is still in the DOM.
	    $('.microhint').fadeOut(600, function(){
	    	$('.microhint').remove();
	    });
	}
	eObj.microhintIdMem.shift();
	console.log('removeMicrohintFromIdMem - microhintIdMem 2: ' + JSON.stringify(eObj.microhintIdMem));
}


// MEGET VIGTIGT:
// ==============
// Denne funktion erstatter inlineMicrohintStyles()
function addIdToMicrohint() {
	var newId = (eObj.microhintIdMem.length > 0)? eObj.microhintIdMem[eObj.microhintIdMem.length-1]+1 : 0;
	console.log('inlineMicrohintStyles - newId: ' + newId + ', eObj.microhintIdMem.length: ' + eObj.microhintIdMem.length);

	eObj.microhintIdMem.push(newId);

	$('.microhint').attr('id', 'microhint_'+newId);

	for (var i = eObj.microhintIdMem.length - 1; i >= 0; i--) {  // Clean up: If one or more microhints are missing from the DOM, then delete the corrosponding id from the array! (else: the user has to click twice remove a "rouge" microhint)
		if ($('#microhint_'+eObj.microhintIdMem[i]).length == 0) {
			eObj.microhintIdMem.splice(i, 1);
		}
	}

	// for (var i = 0; i < eObj.microhintIdMem.length - 1; i++) { // ADDED 29-03-2017, to make sure that there are alway max one microhint at a time.
	// 	removeMicrohintFromIdMem();
	// };

	var numOfMicrohints =  $(".microhint" ).length;
	$(".microhint" ).each(function( index, element ) { 
		if (numOfMicrohints > 1) {
			$(element).fadeOut(600, function(){
		    	$(element).remove();
		    });
		    --numOfMicrohints;
		}
	});
	
}



// MEGET VIGTIGT:
// ==============
// Da ATO snart går på barsel, og microhint() ikke understøtter mere end eet microhints i DOM'en af gangen, så 
// er dette et _MIDLERTIDIGT_ workaround indtil ATO laver understøttelse af flere microhints i DOM'en.
function inlineMicrohintStyles() {
	var newId = (eObj.microhintIdMem.length > 0)? eObj.microhintIdMem[eObj.microhintIdMem.length-1]+1 : 0;
	console.log('inlineMicrohintStyles - newId: ' + newId + ', eObj.microhintIdMem.length: ' + eObj.microhintIdMem.length);

	eObj.microhintIdMem.push(newId);

	$('.microhint').attr('id', 'microhint_'+newId);
	$('#microhint_'+newId).copyCSS('.microhint');  // copy all styles
	$('#microhint_'+newId).removeClass('microhint');
	var bgColor = $('#microhint_'+newId).css('background-color');
	// $('#microhint_'+newId+' .triangle').css({'-webkit-text-fill-color': bgColor, 'color': bgColor});  // <---- VIRKER OK - kortest løsning!

	$('#microhint_'+newId+' .triangle').attr('id', 'triangle_'+newId);
	$('#triangle_'+newId).copyCSS('.triangle');
	$('#triangle_'+newId).removeClass('triangle');
	$('#triangle_'+newId).css({'-webkit-text-fill-color': bgColor, 'color': bgColor});  // <---- VIRKER OK - en længere løsning!

	for (var i = eObj.microhintIdMem.length - 1; i >= 0; i--) {  // Clean up: If one or more microhints are missing from the DOM, then delete the corrosponding id from the array! (else: the user has to click twice remove a "rouge" microhint)
		if ($('#microhint_'+eObj.microhintIdMem[i]).length == 0) {
			eObj.microhintIdMem.splice(i, 1);
		}
	}

	for (var i = 0; i < eObj.microhintIdMem.length - 1; i++) { // ADDED 29-03-2017, tom make sure that there are alway max one microhint at a time.
		removeMicrohintFromIdMem();
	};
}


/*
Copyright 2014 Mike Dunn
http://upshots.org/
https://github.com/moagrius/copycss
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($){
	
	$.fn.getStyles = function(only, except) {
		
		// the map to return with requested styles and values as KVP
		var product = {};
		
		// the style object from the DOM element we need to iterate through
		var style;
		
		// recycle the name of the style attribute
		var name;
		
		// if it's a limited list, no need to run through the entire style object
		if (only && only instanceof Array) {
			
			for (var i = 0, l = only.length; i < l; i++) {
				// since we have the name already, just return via built-in .css method
				name = only[i];
				product[name] = this.css(name);
			}
			
		} else {
		
			// prevent from empty selector
			if (this.length) {
				
				// otherwise, we need to get everything
				var dom = this.get(0);
				
				// standards
				if (window.getComputedStyle) {
					
					// convenience methods to turn css case ('background-image') to camel ('backgroundImage')
					var pattern = /\-([a-z])/g;
					var uc = function (a, b) {
							return b.toUpperCase();
					};			
					var camelize = function(string){
						return string.replace(pattern, uc);
					};
					
					// make sure we're getting a good reference
					if (style = window.getComputedStyle(dom, null)) {
						var camel, value;
						// opera doesn't give back style.length - use truthy since a 0 length may as well be skipped anyways
						if (style.length) {
							for (var i = 0, l = style.length; i < l; i++) {
								name = style[i];
								camel = camelize(name);
								value = style.getPropertyValue(name);
								product[camel] = value;
							}
						} else {
							// opera
							for (name in style) {
								camel = camelize(name);
								value = style.getPropertyValue(name) || style[name];
								product[camel] = value;
							}
						}
					}
				}
				// IE - first try currentStyle, then normal style object - don't bother with runtimeStyle
				else if (style = dom.currentStyle) {
					for (name in style) {
						product[name] = style[name];
					}
				}
				else if (style = dom.style) {
					for (name in style) {
						if (typeof style[name] != 'function') {
							product[name] = style[name];
						}
					}
				}
			}
		}
		
		// remove any styles specified...
		// be careful on blacklist - sometimes vendor-specific values aren't obvious but will be visible...  e.g., excepting 'color' will still let '-webkit-text-fill-color' through, which will in fact color the text
		if (except && except instanceof Array) {
			for (var i = 0, l = except.length; i < l; i++) {
				name = except[i];
				delete product[name];
			}
		}
		
		// one way out so we can process blacklist in one spot
		return product;
	
	};
	
	// sugar - source is the selector, dom element or jQuery instance to copy from - only and except are optional
	$.fn.copyCSS = function(source, only, except) {
		var styles = $(source).getStyles(only, except);
		this.css(styles);
		
		return this;
	};
	
})(jQuery);


function wrongLabel(){
	// return '<span class="label_wrong"><b>Forkert</b> placeret</span><br>';
	return '<div class="microhint_label_danger"><b>Forkert</b> placeret</div>';
}


function unitsInWords(){
	var HTML = '';
	for (var n in eObj.aObj.unit.nominator) {
		for (var m in jsonData.genericUnit) {
			console.log('unitsInWords - nominator - eObj.aObj.unit.nominator['+n+']: ' + eObj.aObj.unit.nominator[n] + ', jsonData.genericUnit['+m+'].sym: ' + jsonData.genericUnit[m].sym);
			if (eObj.aObj.unit.nominator[n] == jsonData.genericUnit[m].sym) {
				HTML += ' ' + jsonData.genericUnit[m].name[0].toLowerCase();
			}
		}
	}
	for (var n in eObj.aObj.unit.denominator) {
		for (var m in jsonData.genericUnit) {
			console.log('unitsInWords - denominator - eObj.aObj.unit.denominator['+n+']: ' + eObj.aObj.unit.denominator[n] + ', jsonData.genericUnit['+m+'].sym: ' + jsonData.genericUnit[m].sym);
			if (eObj.aObj.unit.denominator[n] == jsonData.genericUnit[m].sym) {
				HTML += ' pr ' + jsonData.genericUnit[m].name[0].toLowerCase();
			}
		}
	}
	console.log('unitsInWords - HTML: ' + HTML);

	return HTML;
}


function answerSymbolOrUnits(quizNo) {

	var id, answerSymbolOrUnit = [], count = 0;

	if (jsonData.easyQuestions) {  // If easyQuestions = true, the student is presented with easy questions - eg. either the symbol is pre-placed or all units are pre-placed.

		console.log('answerSymbolOrUnits - CALLED');
		var jdgs = jsonData.genericSymbol;
		console.log('answerSymbolOrUnits - jdgs: ' + JSON.stringify(jdgs));
		var jdq = jsonData.qObj[quizNo];
		console.log('answerSymbolOrUnits - jdq: ' + JSON.stringify(jdq));
		var genericSymbolNo = jdq.quiz_genericSymbol;
		console.log('answerSymbolOrUnits - genericSymbolNo: ' + genericSymbolNo);
		var genericSymbolObj = jdgs[genericSymbolNo];
		console.log('answerSymbolOrUnits - genericSymbolObj: ' + JSON.stringify(genericSymbolObj));

		var symbol = genericSymbolObj.sym;

		var unitArr = [];
		for (var i = 0; i < genericSymbolObj.unit.length; i++) {
			unitArr.push(i);
		};
		console.log('answerSymbolOrUnits - unitArr: ' + JSON.stringify(unitArr));

		var m = shuffelArray(unitArr)[0];  // <----- "m" is the choosen unit. Eg. unitArr = [0, 1] for "unit" in ["W",{"nominator": "J", "denominator": "s"}] for "Effekt" in the JSON data.
		eObj.choosenUnit_sys = m;          // <----- This var is used in answerSymbolOrUnits_insert()


		if (Math.random() > 0.5) { // Symbol	

			id = eObj.symDb_reverse[eObj.aObj.symbol];  // IMPORTANT: Reverse lookup here! If two symbols are similar (eg. 'c' used for 'speed og light' and 'specific heat capacity'), then this will fail!
			eObj.idOfDroppedEntities.push(id);
			answerSymbolOrUnit.push(eObj.aObj.symbol);

		} else { // Unit
			// VIGTIGT: Husk at tage højde for at f.eks effekt "P" har to svar ift enheder!!!

			var nominator = [], denominator = [];
			if (genericSymbolObj.unit[m].hasOwnProperty('denominator')) {
				nominator = nominator.concat((typeof(genericSymbolObj.unit[m].nominator) === 'string')? genericSymbolObj.unit[m].nominator.split('*') : genericSymbolObj.unit[m].nominator) ;
				denominator = denominator.concat((typeof(genericSymbolObj.unit[m].denominator) === 'string')? genericSymbolObj.unit[m].denominator.split('*') : genericSymbolObj.unit[m].denominator);
			} else {
				nominator = nominator.concat(typeof(genericSymbolObj.unit[m]) === 'string')? genericSymbolObj.unit[m].split('*') : genericSymbolObj.unit[m];
			}
			answerSymbolOrUnit = nominator.concat(denominator);
			console.log('answerSymbolOrUnits - answerSymbolOrUnit: ' + JSON.stringify(answerSymbolOrUnit));

			for (var n in answerSymbolOrUnit) {
				console.log('answerSymbolOrUnits - answerSymbolOrUnit['+n+']: ' + answerSymbolOrUnit[n] + ', symDb_reverse[answerSymbolOrUnit['+n+']]: ' + eObj.symDb_reverse[answerSymbolOrUnit[n]]);
				console.log('answerSymbolOrUnits - n: ' + n + ', class: ' + $('#'+eObj.symDb_reverse[answerSymbolOrUnit[n]]).prop('class'));
				eObj.idOfDroppedEntities.push(eObj.symDb_reverse[answerSymbolOrUnit[n]]);

				// $('#'+eObj.symDb_reverse[answerSymbolOrUnit[n]]).css({'background-color': '#F00'});      // <---- WORKS OK!!!
				// $('#'+symDb_reverse[answerSymbolOrUnit[n]]).removeClass('nominator_OK denominator_OK');  // <---- THIS DOES NOT WORK FOR SOME BIZAR REASON... The reason being that JQuery UI drag-and-drop is preventing it!
				// $('#'+symDb_reverse[answerSymbolOrUnit[n]]).removeClass('XXXXX'); 						// <---- WORKS OK! This proves the statement JQuery UI drag-and-drop is preventing removeClass('nominator_OK denominator_OK') from working.

			}

			console.log('answerSymbolOrUnits - eObj.idOfDroppedEntities: ' + JSON.stringify(eObj.idOfDroppedEntities));
			console.log('answerSymbolOrUnits - m: ' + m);

			eObj.aObj = setAnswerUnits(eObj.quizNo, m);
			resetAcceptedDraggable_units(quizNo, eObj.aObj.unit);
			eObj.answerSymbols = [eObj.aObj.symbol].concat(eObj.aObj.unit.nominator.concat(eObj.aObj.unit.denominator));


			// $('#17').css({'background-color': '#F00'});

		}

		// console.log('answerSymbolOrUnits - id: ' + id);
		console.log('answerSymbolOrUnits - eObj 2: ' + JSON.stringify(eObj, null, 4));
		// // eObj.symDb
	}

	return answerSymbolOrUnit;
}


function answerSymbolOrUnits_insert(answerSymbolOrUnit) {

	if (jsonData.easyQuestions) {  // If easyQuestions = true, the student is presented with easy questions - eg. either the symbol is pre-placed or all units are pre-placed.

		console.log('answerSymbolOrUnits_insert - answerSymbolOrUnit: ' + answerSymbolOrUnit);

		var jdgs = jsonData.genericSymbol;
		console.log('answerSymbolOrUnits_insert - jdgs: ' + JSON.stringify(jdgs));
		var jdq = jsonData.qObj[eObj.quizNo];
		console.log('answerSymbolOrUnits_insert - jdq: ' + JSON.stringify(jdq));
		var genericSymbolNo = jdq.quiz_genericSymbol;
		console.log('answerSymbolOrUnits_insert - genericSymbolNo: ' + genericSymbolNo);
		var genericSymbolObj = jdgs[genericSymbolNo];
		console.log('answerSymbolOrUnits_insert - genericSymbolObj: ' + JSON.stringify(genericSymbolObj));

		var n = eObj.choosenUnit_sys;
		console.log('answerSymbolOrUnits_insert - n: ' + n);
		
		var nominator = [], denominator = [];
		if (genericSymbolObj.unit[n].hasOwnProperty('denominator')) {
			nominator = nominator.concat((typeof(genericSymbolObj.unit[n].nominator) === 'string')? genericSymbolObj.unit[n].nominator.split('*') : genericSymbolObj.unit[n].nominator) ;
			denominator = denominator.concat((typeof(genericSymbolObj.unit[n].denominator) === 'string')? genericSymbolObj.unit[n].denominator.split('*') : genericSymbolObj.unit[n].denominator);
		} else {
			nominator = nominator.concat(typeof(genericSymbolObj.unit[n]) === 'string')? genericSymbolObj.unit[n].split('*') : genericSymbolObj.unit[n];
		}

		autoHideFractionAndDenominator(eObj.aObj.unit);

		// eObj.showFractionError = false;
		// clearTimeout(eObj.showFractionError_timer);  // Clear the timer
		

		var id, Tclass, pos, acceptArr;
		for (var n in answerSymbolOrUnit) {
			id = eObj.symDb_reverse[answerSymbolOrUnit[n]];
			console.log('answerSymbolOrUnits_insert - id: ' + id);
			
			if (genericSymbolObj.sym == answerSymbolOrUnit[n]) {
				// $('#dropZone_symbol').append(SimpleClone($('#'+id)).removeAttr( "style" ).attr('id','dropped_'+id));
				$('#dropZone_symbol').append('<div id="dropped_'+id+'" class="symbol label label-default draggable_entity_clone sys_clone">' + $('#'+id).html() + '</div>');
				autoCenterByAjustingLeftMargin('#dropZone_symbol');
			}

			if (elementInArray(nominator, answerSymbolOrUnit[n])) {
				// $('#dropZone_nominator').append(SimpleClone($('#'+id)).removeAttr( "style" ).attr('id','dropped_'+id));
				addMultiplicationSymbol('dropZone_nominator');
				$('#dropZone_nominator').append('<div id="dropped_'+id+'" class="unit label label-default draggable_entity_clone sys_clone">' + $('#'+id).html() + '</div>');
				// $('#dropZone_nominator').append('<span class="multiplication">&#9679;</span>');
				autoCenterByAjustingLeftMargin('#dropZone_nominator');
			}

			if (elementInArray(denominator, answerSymbolOrUnit[n])) {
				// $('#dropZone_denominator').append(SimpleClone($('#'+id)).removeAttr( "style" ).attr('id','dropped_'+id));
				addMultiplicationSymbol('dropZone_denominator');
				$('#dropZone_denominator').append('<div id="dropped_'+id+'" class="unit label label-default draggable_entity_clone sys_clone">' + $('#'+id).html() + '</div>');
				autoCenterByAjustingLeftMargin('#dropZone_denominator');
			}
		}
	}
}


function makeSymDb() {
	var count = 0;

	for (var n in jsonData.genericSymbol) {
		eObj.symDb[count] = jsonData.genericSymbol[n].sym;
		++count;
	}

	for (var n in jsonData.genericUnit) {
		eObj.symDb[count] = jsonData.genericUnit[n].sym;
		++count;
	}

	for (var n in eObj.symDb) {
		eObj.symDb_reverse[eObj.symDb[n]] = n; 
	}
	console.log('answerSymbolOrUnits - eObj.symDb_reverse: ' + JSON.stringify(eObj.symDb_reverse));
}


function main(quizNo){

	console.log('main - CALLED');

	// These internal counters and objects needs to be reset at each question:
	eObj.entityId = 0; 			 		// Internal counter for undropped id's of draggables. Dont alter this!
	eObj.droppedEntityId = 0;		 	// Internal counter for dropped id's of draggables. Dont alter this!
	eObj.outsideDropzoneCount = 0; 		// Internal counter for for keeping track of how many times an entity is dropped outside a dropzone. At each new question this counter is reset to zero. Dont alter this!
	eObj.idOfDroppedEntities = []; 		// Internal array for id's of dropped enteties.
	eObj.symDb = {}; 				 	// Internal object for keeping track of symbols an id
	eObj.symDb_reverse = {};
	eObj.choosenUnit_sys;
	eObj.posMem = {}; 			 		// Internal object for keeping track of the start position of dragged objects
	eObj.wrongFeedbackTriggered = false // Internal bool for triggered feedback. Dont alter this!
	eObj.questionAnswered = false;		// Internal bool for regstring if the question/task has been answered by the student.
	eObj.showFractionError = false;		// Internal bool for showing the fraction error msg.
	eObj.showFractionErrorCount = 0;	// Internal counter for for keeping track of how many times the student makes an action where showFractionError is true.
	eObj.showFractionError_timer;		// Internal variable to hold setTimeout var.
	eObj.negativeFeedbackCount_unit = 0;// Internal counter for for keeping track of how many times the student places a wrong draggable inside a dropzone.
	eObj.negativeFeedbackCount_symbol = 0;
	eObj.negativeFeedbackCorrectUnitWrongZoneCount = 0;
	eObj.negativeFeedbackNextBtnCount = 0;
	// eObj.negativeFeedbackNextBtnCount_cliked = 0;
	eObj.microhintRemoveCount = 0;
	eObj.microhintIdMem = [];

	// eObj.aObj = getAnswerSymbolAndUnits(eObj.quizNo);  // COMMENTED OUT 23-03-2017
	eObj.aObj = getAnswerSymbolAndUnits_2(eObj.quizNo);   // ADDED 23-03-2017

	console.log('main - eObj 1: ' + JSON.stringify(eObj));
	eObj.answerSymbols = [eObj.aObj.symbol].concat(eObj.aObj.unit.nominator.concat(eObj.aObj.unit.denominator));
	poseQuestion(eObj.quizNo);
	// autoCenterByAjustingLeftPadding_question('#question');  	// <---- This works! TLY does not want the text centered.
	// autoHideFractionAndDenominator(aObj.unit);  				// <---- This works! BUT: the student will start with only the nominator visible.
	// hideFractionAndDenominator();				// <----- This hides the fraction and denominator when the program loades.

	makeSymDb();

var TanswerSymbolOrUnit = answerSymbolOrUnits(eObj.quizNo);   // VIRKER PT IKKE ORDENTLIGT
// var TanswerSymbolOrUnit = [];   // VIRKER PT IKKE ORDENTLIGT

	$('.lowerRow').height($('.lowerRow').height());  // <----- IMPORTANT: The height on the .lowerRow container "jumps" up and down as the new .draggable_entity's are created. By locking the height, the jump is prevented
	makeDraggable_symbols(eObj.quizNo, eObj.aObj.symbol, TanswerSymbolOrUnit);
	makeDraggable_units(eObj.quizNo, eObj.aObj.unit, TanswerSymbolOrUnit);
	$('.draggable_entity').hide();

	setEventHandlers();   // COMMENTED OUT 22-03-2017

	MathJax.Hub.Queue(["Typeset",MathJax.Hub,$('#interfaceContainer')[0]]);

	MathJax.Hub.Queue(function (){
		// $('.draggable_entity').removeClass('hidden');  
		$('.draggable_entity').fadeIn('slow', function(){
			$('.lowerRow').height('auto');		// <----- IMPORTANT: remove the lock on the height in case there is more or less .draggable_entity's.

			// microhint($('#'+randomSymbolIndex()), "Træk til en af kasserne foroven!", "#000");
			
			// microhint($('#'+randomUnitIndex()), "Træk enheder til en af kasserne foroven", "#000");

		});  

		// answerSymbolOrUnits(eObj.quizNo);   // VIRKER PT IKKE ORDENTLIGT

		// $('#17').css({'background-color': '#F00'});

		// setEventHandlers();   // COMMENTED OUT 22-03-2017

		answerSymbolOrUnits_insert(TanswerSymbolOrUnit);

	});

	

	console.log('main - eObj 2: ' + JSON.stringify(eObj));
	console.log("main - quizNo: " + quizNo + ", jsonData.qObj.length: " + jsonData.qObj.length);
}


// Touch-events:
// =============
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

// $(document).on('touchmove', "body", function(event) {   // <------- FEJL: "touchmove", "touchstart"  virker ikke med mus - man skal have mousedown!
// $(document).on('mousedown', "body", function(event) { 									// <----- FEJL ift hurtigt træk i .draggable_entity   
$(document).on('click', "body", function(event) {											// <----- OK ift hurtigt træk i .draggable_entity
// $(document).on('mousedown', ".microhint", function(event) {    // , .draggable_entity
// $(document).on('mousedown', ".draggable_entity", function(event) {						// <----- FEJL ift hurtigt træk i .draggable_entity
	
	// console.log('body - CLICKED - negativeFeedbackNextBtnCount_cliked: ' + eObj.negativeFeedbackNextBtnCount_cliked);

	if ((typeof(nextQuestion_clicked)==='undefined') || (!nextQuestion_clicked)){   // This prevents the microhint msg from closing if #nextQuestion is pressed. 
		eObj.wrongFeedbackTriggered = false;
        moveDraggableBackToTheOriginalPosition();

        // $('.microhint').fadeOut(600, function(){
        // 	$('.microhint').remove();
        // });
        removeMicrohintFromIdMem(600);

        console.log('body - microhint - REMOVE - microhintRemoveCount: ' + eObj.microhintRemoveCount);
        ++eObj.microhintRemoveCount;

        $('.draggable_entity').draggable( 'enable' );  // COMMENTED OUT 22-03-2017 // First enable draggables again after a click on the body
        
        if (eObj.questionAnswered) {
        	++eObj.quizNo;

        	if (eObj.quizNo < jsonData.qObj.length) {
            	$('#dropZone_symbol').html('');
            	$('#dropZone_nominator').html('');
            	$('#dropZone_denominator').html('');
            	main(eObj.quizNo);

            	$('#questionCount').text(String(eObj.quizNo+1) +' ud af '+ jsonData.qObj.length);

            	$('.QuestionCounter').text(String(eObj.quizNo+1) +' ud af '+ jsonData.qObj.length);

            	// <div class="score_container"><span class="scoreText">Korrekte svar: </span><span class="QuestionCounter QuestionTask">3 ud af 5</span> <span class="scoreText"> Fejl: </span><span class="ErrorCount QuestionTask">0</span></div>

            } else {
            	UserMsgBox("body", '<h3>Du har<span class="label label-success">korrekt</span> besvaret alle opgaverne!</h3><p>Klik denne besked væk for at prøve igen.</p>');
		    	$('.MsgBox_bgr').unbind();
		    	$('#UserMsgBox').unbind();
		    	$('.MsgBox_bgr').addClass('MsgBox_reload');
		    	$('#UserMsgBox').addClass('MsgBox_reload');

            	eObj.questionAnswered = false;
            }
        }
	}

	nextQuestion_clicked = false; 

	// ++eObj.negativeFeedbackNextBtnCount_cliked;
});


// // $('body')[0].addEventListener("mousedown", function(){  // <----- FEJL ift hurtigt træk i .draggable_entity
// document.addEventListener("mousedown", function(){  // <----- FEJL ift hurtigt træk i .draggable_entity
// 	eObj.wrongFeedbackTriggered = false;
//             moveDraggableBackToTheOriginalPosition();
//             $('.microhint').fadeOut(600, function(){
//             	$('.microhint').remove();
//             });
        
//             if (eObj.questionAnswered) {
//             	++eObj.quizNo;

//             	if (eObj.quizNo < jsonData.qObj.length) {
// 	            	$('#dropZone_symbol').html('');
// 	            	$('#dropZone_nominator').html('');
// 	            	$('#dropZone_denominator').html('');
// 	            	main(eObj.quizNo);

// 	            	$('#questionCount').text(String(eObj.quizNo+1) +'/'+ jsonData.qObj.length);
// 	            } else {
// 	            	UserMsgBox("body", '<h3>Du har <span class="label label-success">korrekt</span> besvaret alle opgaverne!</h3><p>Posetivt feedback...</p>');

// 	            	eObj.questionAnswered = false;
// 	            }
//             }
// }); 


$(document).on('click', "#nextQuestion", function(event) {

	window.nextQuestion_clicked = true;
	console.log('nextQuestion - REMOVE - CLICKED');


	// console.log('nextQuestion - CLICKED - negativeFeedbackNextBtnCount_cliked: ' + eObj.negativeFeedbackNextBtnCount_cliked);
	// eObj.negativeFeedbackNextBtnCount_cliked = 0;

	if (eObj.questionAnswered) {
	
    	++eObj.quizNo;

    	if (eObj.quizNo < jsonData.qObj.length) {
        	$('#dropZone_symbol').html('');
        	$('#dropZone_nominator').html('');
        	$('#dropZone_denominator').html('');
        	main(eObj.quizNo);

        	$('#questionCount').text(String(eObj.quizNo+1) +' ud af  '+ jsonData.qObj.length);

        	nextQuestion_clicked = false;
        	removeMicrohintFromIdMem(600);

        } else {
        	UserMsgBox("body", '<h3>Du har<span class="label label-success">korrekt</span> besvaret alle opgaverne!</h3><p>Klik denne besked væk for at prøve igen.</p>');
	    	$('.MsgBox_bgr').unbind();
	    	$('#UserMsgBox').unbind();
	    	$('.MsgBox_bgr').addClass('MsgBox_reload');
	    	$('#UserMsgBox').addClass('MsgBox_reload');

        	eObj.questionAnswered = false;
        }

    } else {

    	var TquizNo = jsonData.qObj[eObj.quizNo].quiz_genericSymbol;

    	var jdgs = jsonData.genericSymbol[TquizNo];
    	console.log('nextQuestion - eObj.quizNo: ' + eObj.quizNo  + ', TquizNo: ' + TquizNo + ', jdgs: ' + JSON.stringify(jdgs));
    	
    	// if (eObj.negativeFeedbackNextBtnCount == 0) {
    	// 	console.log('nextQuestion - A2');
    	// 	microhint($('#nextQuestion'), "Spørgsmålet er ikke besvaret endnu: overvej den fysiske mening af besvarelsen...", "#000");
    	// }

    	// if (eObj.negativeFeedbackNextBtnCount == 1) {
    	// 	console.log('nextQuestion - A3');
    	// 	microhint($('#nextQuestion'), "Spørgsmålet er ikke besvaret endnu: hvad er definitionen af "+jdgs.name[0].toLowerCase()+"?", "#000");
    	// }

    	// if (eObj.negativeFeedbackNextBtnCount == 2) {
    	// 	console.log('nextQuestion - A4');
    	// 	microhint($('#nextQuestion'), "Spørgsmålet er ikke besvaret endnu: hvilke enheder indgår i definitionen af "+jdgs.name[0].toLowerCase()+"?", "#000");
    	// }

    	// if (eObj.negativeFeedbackNextBtnCount >= 3) {
    	// 	console.log('nextQuestion - A4');
    	// 	microhint($('#nextQuestion'), "Spørgsmålet er ikke besvaret endnu: hvilke enheder indgår i definitionen af "+jdgs.name[0].toLowerCase()+"?", "#000");
    	// }

    	if (eObj.negativeFeedbackNextBtnCount == 0) {
    		console.log('nextQuestion - A2');
    		microhint($('#nextQuestion'), "Spørgsmålet er ikke besvaret endnu.", "#000");
    	}

    	if (eObj.negativeFeedbackNextBtnCount == 1) {
    		console.log('nextQuestion - A3');
    		microhint($('#nextQuestion'), "Prøv at søge efter svaret i din lærebog eller på nettet.", "#000");
    	}

    	if (eObj.negativeFeedbackNextBtnCount >= 2) {  // THIS IS THE LAST HINT! - where the student i presented with the anwswer.
    		console.log('nextQuestion - A4');

    		$('body').append('<div id="latexPrepContainer_symbol" class="hidden"></div>');
    		$('#latexPrepContainer_symbol').html('\\('+jdgs.sym+'\\)');
    		MathJax.Hub.Queue(["Typeset",MathJax.Hub,$('#latexPrepContainer_symbol')[0]]);


    		var nominator, denominator;
    		for (var n in jdgs.unit) {
				// if (genericSymbolObj.unit[n].hasOwnProperty('nominator')) {
				if (jdgs.unit[n].hasOwnProperty('denominator')) {
					nominator = (typeof(jdgs.unit[n].nominator) === 'string')? jdgs.unit[n].nominator.split('*') : jdgs.unit[n].nominator;
					denominator = (typeof(jdgs.unit[n].denominator) === 'string')? jdgs.unit[n].denominator.split('*') : jdgs.unit[n].denominator;
					latex = '\\frac{'+nominator.join(' \\cdot ')+'}{'+denominator.join(' \\cdot ')+'}';
				} else {
					// nominator = nominator.concat(genericSymbolObj.unit[n]);
					nominator = (typeof(jdgs.unit[n]) === 'string')? jdgs.unit[n].split('*') : jdgs.unit[n];
					latex = nominator.join(' \\cdot ');
				}

				$('body').append('<div class="latexPrepContainer_unit hidden"></div>');
	    		$('.latexPrepContainer_unit:last').html('\\('+latex+'\\)');
	    		MathJax.Hub.Queue(["Typeset",MathJax.Hub,$('.latexPrepContainer_unit:last')[0]]);
			}
			
    		// var latex = '';
    		// if (eObj.aObj.unit.denominator.length > 0) {
    		// 	latex = '\\frac{'+eObj.aObj.unit.nominator.join(' \\cdot ')+'}{'+eObj.aObj.unit.denominator.join(' \\cdot ')+'}';
    		// } else {
    		// 	latex = eObj.aObj.unit.nominator.join(' \\cdot ');
    		// }

    		// $('body').append('<div class="latexPrepContainer_unit"></div>');
    		// $('.latexPrepContainer_unit').html('\\('+latex+'\\)');
    		// MathJax.Hub.Queue(["Typeset",MathJax.Hub,$('.latexPrepContainer_unit')[0]]);

			MathJax.Hub.Queue(function (){

				var latexArr = []; 
				var HTML = jdgs.name[0] +' <span class="nextQuestion_studentAnswer_symbol">'+$('#latexPrepContainer_symbol').html()+'</span>' + ((jdgs.unit.length > 1)? ' kan måles på flere måder: ' : ' måles i ');
				$(".latexPrepContainer_unit" ).each(function( index, element ) {
					latexArr.push($(element).html());

					// HTML += '<span class="nextQuestion_studentAnswer_unit">'+$(element).html()+'</span>' + ((index+2 > jdgs.unit.length)? '' : ((index+2 < jdgs.unit.length)? ', ' : ' og ')) ;   // <---- OK!
					
					var words;
					if (jdgs.unit[index].hasOwnProperty('denominator')) {
						nominator = (typeof(jdgs.unit[index].nominator) === 'string')? jdgs.unit[index].nominator.split('*') : jdgs.unit[index].nominator;
						denominator = (typeof(jdgs.unit[index].denominator) === 'string')? jdgs.unit[index].denominator.split('*') : jdgs.unit[index].denominator;
						words = nominator.join(' ')+' pr '+denominator.join(' pr ');
					} else {
						// nominator = nominator.concat(genericSymbolObj.unit[n]);
						nominator = (typeof(jdgs.unit[index]) === 'string')? jdgs.unit[index].split('*') : jdgs.unit[index];
						words = nominator.join(' ');
					}
					HTML += '<span class="nextQuestion_studentAnswer_unit">'+$(element).html()+'</span>' + ((index+2 > jdgs.unit.length)? '' : ((index+2 < jdgs.unit.length)? ' (i ord: "'+words+'"), ' : ' og ')) ;

				});
				console.log('nextQuestion - HTML: ' + HTML);
				console.log('nextQuestion - latexPrepContainer_symbol.length: ' + $('#latexPrepContainer_symbol').length + ', latexPrepContainer_unit.length: ' + $(".latexPrepContainer_unit").length);
				

				microhint($('#nextQuestion'), HTML, "#000");

				$('#latexPrepContainer_symbol').remove();
				$('.latexPrepContainer_unit').remove();

				var numOfMicrohints =  $(".microhint" ).length;  // IMPORTANT: since this microhint has a delay in being created, removal of other microhint is need! (Due to the dalay, this microhint will not be counted as being in the dom at time of creation)
				$(".microhint" ).each(function( index, element ) { 
					if (numOfMicrohints > 1) {
						$(element).fadeOut(600, function(){
					    	$(element).remove();
					    });
					    --numOfMicrohints;
					}
				});
			});
    	}

    	addIdToMicrohint();

    	++eObj.negativeFeedbackNextBtnCount;

    }
    
});


$( document ).on('click', "#toggleFraction", function(event){
	toggleFractionAndDenominator();

	if (eObj.showFractionError) {
		eObj.showFractionError = false;
		clearTimeout(eObj.showFractionError_timer);  // Clear the timer


		// ###################################

	}

});


$(document).on('click', "#nextQuestion_cheat", function(event) {

	window.nextQuestion_clicked = true;
	console.log('nextQuestion_cheat - CLICKED');
	
	++eObj.quizNo;

	if (eObj.quizNo < jsonData.qObj.length) {
    	$('#dropZone_symbol').html('');
    	$('#dropZone_nominator').html('');
    	$('#dropZone_denominator').html('');
    	main(eObj.quizNo);

    	$('#questionCount').text(String(eObj.quizNo+1) +' ud af  '+ jsonData.qObj.length);
    } else {
    	UserMsgBox("body", '<h3>Du har<span class="label label-success">korrekt</span> besvaret alle opgaverne!</h3><p>Klik denne besked væk for at prøve igen.</p>');
    	$('.MsgBox_bgr').unbind();
    	$('#UserMsgBox').unbind();
    	$('.MsgBox_bgr').addClass('MsgBox_reload');
    	$('#UserMsgBox').addClass('MsgBox_reload');

    	eObj.questionAnswered = false;
    }
    
});


$(document).on('click', ".MsgBox_reload", function(event) {
	location.reload(); 
});




$(window).resize(function() {
	
});

$(document).ready(function() {

	jsonData.qObj = shuffelArray(jsonData.qObj);  // <--- Randomize the quiz questions.

	basicPosCalc();
	window.eObj = {
		useSynonymes: false,     // If set to true synonymes for same physical enteties are used in the questions to the student
		quizNo: 0,    			 // Internal counter for the current question number.

		// entityId: 0, 			 // Internal counter for undropped id's of draggables. Dont alter this!
		// droppedEntityId: 0,		 // Internal counter for dropped id's of draggables. Dont alter this!
		// outsideDropzoneCount: 0, // Internal counter for for keeping track of how many times an entity is dropped outside a dropzone. At each new question this counter is reset to zero. Dont alter this!
		// idOfDroppedEntities: [], // Internal array for id's of dropped enteties.
		// symDb: {}, 				 // Internal object for keeping track of symbols an id
		// posMem: {}, 			 // Internal object for keeping track of the start position of dragged objects
		// wrongFeedbackTriggered: false // Internal bool for triggered feedback. Dont alter this!
	};
	template();
	$('#questionCount').text(String(eObj.quizNo+1) +' ud af '+ jsonData.qObj.length);

	// var aObj = getAnswerSymbolAndUnits(0);
	// console.log('document.ready - aObj: ' + JSON.stringify(aObj));
	// eObj.aObj = aObj;
	// var symArr = [eObj.aObj.symbol];
	// var fractionArr = eObj.aObj.unit.nominator.concat(eObj.aObj.unit.denominator);
	// console.log('document.ready - symArr: ' + symArr + ', fractionArr: ' + fractionArr);
	// eObj.answerSymbols = symArr.concat(fractionArr);
	// eObj.answerSymbols = [eObj.aObj.symbol].concat(eObj.aObj.unit.nominator.concat(eObj.aObj.unit.denominator));
	// console.log('document.ready - eObj.answerSymbols: ' + JSON.stringify(eObj.answerSymbols));


	main(eObj.quizNo);
	// setEventHandlers();           // ADDED 22-03-2017
	hideFractionAndDenominator();				// <----- This hides the fraction and denominator when the program loades.



	// poseQuestion(eObj.quizNo);
	// // autoCenterByAjustingLeftPadding_question('#question');  	// <---- This works! TLY does not want the text centered.
	// // autoHideFractionAndDenominator(aObj.unit);  				// <---- This works! BUT: the student will start with only the nominator visible.
	// hideFractionAndDenominator();				// <----- This hides the fraction and denominator when the program loades.
	// makeDraggable_symbols(eObj.quizNo, aObj.symbol);
	// makeDraggable_units(eObj.quizNo, aObj.unit);
	// setEventHandlers();

	// MathJax.Hub.Queue(["Typeset",MathJax.Hub,$('#interfaceContainer')[0]]);

	// MathJax.Hub.Queue(function (){
	// 	$('.draggable_entity').removeClass('hidden');
	// });

	console.log('document.ready - eObj: ' + JSON.stringify(eObj));

	// microhint($('#symbolContainer'), wrongLabel() + "Træk en af symbolerne op i symbol feltet foroven", "#000");
	// addIdToMicrohint();

	// microhint($('#dropZone_nominator'), wrongLabel() +"Træk enheder til en af kasserne foroven", "#000");
	// addIdToMicrohint();

});
