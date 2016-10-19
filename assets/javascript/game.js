
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

	var NewDefenderSelection = false;
	var IndyDefender = false;
	var NaziDefender = false;
	var ShamanDefender = false;
	var BoulderDefender = false;

	var IndyHP = 150;
	var IndyBaseAttack = 10;
	var IndyAttackGain = 25;

	var NaziHP = 50;
	var NaziBaseAttack = 25;
	var NaziAttackGain = 50;

	var ShamanHP = 125;
	var ShamanBaseAttack = 5;
	var ShamanAttackGain = 30;

	var BoulderHP = 500;
	var BoulderBaseAttack = 0;
	var BoulderAttackGain = 100;



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
			console.log("Boulder: " + BoulderHero);
			console.log("Indy: " + IndyHero);
			console.log("Shaman: " + ShamanHero);
			console.log("Nazi: " + NaziHero);

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
			console.log("Boulder: " + BoulderHero);
			console.log("Indy: " + IndyHero);
			console.log("Shaman: " + ShamanHero);
			console.log("Nazi: " + NaziHero);

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
			console.log("Boulder: " + BoulderHero);
			console.log("Indy: " + IndyHero);
			console.log("Shaman: " + ShamanHero);
			console.log("Nazi: " + NaziHero);

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
			console.log("Boulder: " + BoulderHero);
			console.log("Indy: " + IndyHero);
			console.log("Shaman: " + ShamanHero);
			console.log("Nazi: " + NaziHero);
		}


	})



	$(".ChooseEnemySlotOne").on("click", function(){


		if (NewDefenderSelection === true) {
			$(".ChooseEnemySlotTwo").show();
			$(".ChooseEnemySlotThree").show();
		}

		if (IndyHero === true || ShamanHero === true || BoulderHero === true) {
			defenderPick.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotOne").hide();
			NewDefenderSelection = true;
			NaziDefender = true;
			IndyDefender = false;
			ShamanDefender = false;
			BoulderDefender = false;

		}

		if (NaziHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotOne").hide();
			NewDefenderSelection = true;
			IndyDefender = true;
			ShamanDefender = false;
			BoulderDefender = false;
			NaziDefender = false;
		}


	})

	$(".ChooseEnemySlotTwo").on("click", function(){


		if (NewDefenderSelection === true) {
			$(".ChooseEnemySlotOne").show();
			$(".ChooseEnemySlotThree").show();
		}

		if (IndyHero === true || NaziHero === true || BoulderHero === true) {
			defenderPick.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotTwo").hide();
			NewDefenderSelection = true;
			ShamanDefender = true;
			BoulderDefender = false;
			NaziDefender = false;
			IndyDefender = false;
		}

		if (ShamanHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotTwo").hide();
			NewDefenderSelection = true;
			IndyDefender = true;
			ShamanDefender = false;
			BoulderDefender = false;
			NaziDefender = false;
		}

	})

	$(".ChooseEnemySlotThree").on("click", function(){


		if (NewDefenderSelection === true) {
			$(".ChooseEnemySlotTwo").show();
			$(".ChooseEnemySlotOne").show();
		}

		if (IndyHero === true || NaziHero === true || ShamanHero === true) {
			defenderPick.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotThree").hide();
			NewDefenderSelection = true;
			BoulderDefender = true;
			NaziDefender = false;
			IndyDefender = false;
			ShamanDefender = false;
		}

		if (BoulderHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".ChooseEnemySlotThree").hide();
			NewDefenderSelection = true;
			IndyDefender = true;
			ShamanDefender = false;
			BoulderDefender = false;
			NaziDefender = false;
		}

	})

	$(".FightButton").on("click", function(){

		if (IndyHero === true && NaziDefender === true){
			NaziHP = NaziHP - IndyBaseAttack;
			IndyHP = IndyHP - NaziBaseAttack;
			IndyBaseAttack = IndyBaseAttack + IndyAttackGain;

		}

		else if (IndyHero === true && ShamanDefender === true){
			ShamanHP = ShamanHP - IndyBaseAttack;
			IndyHP = IndyHP - ShamanBaseAttack;
			IndyBaseAttack = IndyBaseAttack + IndyAttackGain;
		}

		else if (IndyHero === true && BoulderDefender === true){
			BoulderHP = BoulderHP - IndyBaseAttack;
			IndyHP = IndyHP - BoulderBaseAttack;
			IndyBaseAttack = IndyBaseAttack + IndyAttackGain;
		}

		else if (NaziHero === true && IndyDefender === true){
			IndyHP = IndyHP - NaziBaseAttack;
			NaziHP = NaziHP - IndyBaseAttack;
			NaziBaseAttack = NaziBaseAttack + NaziAttackGain;
		}

		else if (NaziHero === true && ShamanDefender === true){
			ShamanHP = ShamanHP - NaziBaseAttack;
			NaziHP = NaziHP - ShamanBaseAttack;
			NaziBaseAttack = NaziBaseAttack + NaziAttackGain;
		}

		else if (NaziHero === true && BoulderDefender === true){
			BoulderHP = BoulderHP - NaziBaseAttack;
			NaziHP = NaziHP - BoulderBaseAttack;
			NaziBaseAttack = NaziBaseAttack + NaziAttackGain;
		}

		else if (ShamanHero === true && IndyDefender === true){
			IndyHP = IndyHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - IndyBaseAttack;
			ShamanBaseAttack = ShamanBaseAttack + ShamanAttackGain;
		}

		else if (ShamanHero === true && NaziDefender === true){
			NaziHP = NaziHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - NaziBaseAttack;
			ShamanBaseAttack = ShamanBaseAttack + ShamanAttackGain;
		}

		else if (ShamanHero === true && BoulderDefender === true){
			BoulderHP = BoulderHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - BoulderBaseAttack;
			ShamanBaseAttack = ShamanBaseAttack + ShamanAttackGain;
		}

		else if (BoulderHero === true && IndyDefender === true){
			BoulderHP = BoulderHP - IndyBaseAttack;
			IndyHP = IndyHP - BoulderBaseAttack;
			BoulderBaseAttack = BoulderBaseAttack + BoulderAttackGain;
		}

		else if (BoulderHero === true && NaziDefender === true){
			NaziHP = NaziHP - BoulderBaseAttack;
			BoulderHP = BoulderHP - NaziBaseAttack;
			BoulderBaseAttack = BoulderBaseAttack + BoulderAttackGain;
		}

		else if (BoulderHero === true && ShamanDefender === true){
			BoulderHP = BoulderHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - BoulderBaseAttack;
			BoulderBaseAttack = BoulderBaseAttack + BoulderAttackGain;
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





		// function attackCharacter(first Character, sencondCharacter){

		// }









})