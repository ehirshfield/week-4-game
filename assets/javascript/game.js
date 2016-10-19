
$(document).ready(function(){

	var chosenCharacterEmpty = true;
	var firstChoice = $("<img>");
	var enemyChoiceOne = $("<img>");
	var enemyChoiceTwo = $("<img>");
	var enemyChoiceThree = $("<img>");
	var defenderPick = $("<img>");
	var IndyHero = false;
	var NaziHero = false;
	var ShamanHero = false;
	var BoulderHero = false;



	$("#Indy").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Indy").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChosenCharacter").append(firstChoice);
			chosenCharacterEmpty = false;
			$(".StarterImage #Indy").hide();
			enemyChoiceOne.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			enemyChoiceTwo.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			enemyChoiceThree.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".StarterImage").hide();
			IndyHero = true;
			// NaziEnemy = true;
			// ShamanEnemy = true;
			// BoulderEnemy = true;

		}


		
		 
	})

	$("#Nazi").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Nazi").attr("src", "assets/images/bg.png");
			$(".ChosenCharacter").append(firstChoice);
			chosenCharacterEmpty = false;
			$(".StarterImage #Nazi").hide();
			enemyChoiceOne.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			enemyChoiceTwo.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			enemyChoiceThree.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".StarterImage").hide();
			NaziHero = true;
			// ShamanEnemy = true;
			// BoulderEnemy = true;
			// IndyEnemy = true;

		}



	})

	$("#Shaman").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Shaman").attr("src", "assets/images/shaman.jpg");
			$(".ChosenCharacter").append(firstChoice);
			chosenCharacterEmpty = false;
			$(".StarterImage #Shaman").hide();
			enemyChoiceOne.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			enemyChoiceTwo.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			enemyChoiceThree.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".StarterImage").hide();
			ShamanHero = true;
			// BoulderEnemy = true;
			// IndyEnemy = true;
			// NaziEnemy = true;

		}


	})

	$("#Boulder").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Boulder").attr("src", "assets/images/rock.jpg");
			$(".ChosenCharacter").append(firstChoice);
			chosenCharacterEmpty = false;
			$(".StarterImage #Boulder").hide();
			enemyChoiceOne.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			enemyChoiceTwo.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			enemyChoiceThree.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".StarterImage").hide();
			BoulderHero = true;
			// IndyEnemy = true;
			// NaziEnemy = true;
			// ShamanEnemy = true;
		}


	})



	$(".ChooseEnemySlotOne").on("click", function(){

		console.log(IndyHero);

		if (IndyHero === true || ShamanHero === true || BoulderHero === true) {
			defenderPick.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotOne").hide();
		}

		if (NaziHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotOne").hide();
		}


	})

	$(".ChooseEnemySlotTwo").on("click", function(){

		console.log(IndyHero);

		if (IndyHero === true || NaziHero === true || BoulderHero === true) {
			defenderPick.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotTwo").hide();
		}

		if (ShamanHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotTwo").hide();
		}

	})

	$(".ChooseEnemySlotThree").on("click", function(){

		console.log(IndyHero);

		if (IndyHero === true || NaziHero === true || ShamanHero === true) {
			defenderPick.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotThree").hide();
		}

		if (BoulderHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotThree").hide();
		}

	})

			// $(".ChooseEnemySlotOne").on("click", function(){
			// 	if (NaziEnemy === false && ShamanEnemy === true && BoulderEnemy === true && IndyEnemy === true) {

			// 	defenderPick.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotOne").hide();
			// 	}
				
			// 	else if (ShamanEnemy === false && NaziEnemy === true && BoulderEnemy === true && IndyEnemy === true) {

			// 	defenderPick.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotOne").hide();
			// 	}

			// 	else if (BoulderEnemy === false && NaziEnemy === true && ShamanEnemy === true  && IndyEnemy === true) {

			// 	defenderPick.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotOne").hide();

			// 	}

			// 	else if (IndyEnemy === false && NaziEnemy === true && ShamanEnemy === true && BoulderEnemy === true) {

			// 	defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotOne").hide();

			// 	}
			// })


			// $(".ChooseEnemySlotTwo").on("click", function(){
			// 	if (NaziEnemy === false) {

			// 	defenderPick.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotTwo").hide();
			// 	}
				
			// 	if (ShamanEnemy === false) {

			// 	defenderPick.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotTwo").hide();
			// 	}

			// 	if (BoulderEnemy === false) {

			// 	defenderPick.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotTwo").hide();

			// 	}

			// 	if (IndyEnemy === false) {

			// 	defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotTwo").hide();

			// 	}
			// })

			// $(".ChooseEnemySlotThree").on("click", function(){
			// 	if (NaziEnemy === false) {

			// 	defenderPick.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotThree").hide();
			// 	}
				
			// 	if (ShamanEnemy === false) {

			// 	defenderPick.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotThree").hide();
			// 	}

			// 	if (BoulderEnemy === false) {

			// 	defenderPick.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotThree").hide();

			// 	}

			// 	if (IndyEnemy === false) {

			// 	defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			// 	$(".Defender").append(defenderPick);
			// 	$(".ChooseEnemySlotThree").hide();

			// 	}
			// })















})