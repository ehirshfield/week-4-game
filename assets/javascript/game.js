
$(document).ready(function(){

	var chosenCharacterEmpty = true;
	var firstChoice = $("<img>");
	var enemyChoiceOne = $("<img>");
	var enemyChoiceTwo = $("<img>");
	var enemyChoiceThree = $("<img>");
	var defenderPick = $("<img>");
	var resetButton = $("<button>");

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

	var BoulderHP = 300;
	var BoulderBaseAttack = 30;
	var BoulderAttackGain = 100;

	var IndyNameTag = "Indiana Jones"
	var NaziNameTag = "Arnold Ernst Toht"
	var ShamanNameTag = "Mola Ram"
	var BoulderNameTag = "Boulder"

	$(".StartIndyHealth").html(IndyHP);
	$(".StartNaziHealth").html(NaziHP);
	$(".StartShamanHealth").html(ShamanHP);
	$(".StartBoulderHealth").html(BoulderHP);

	$(".ResetGame").hide();

	




	$("#Indy").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Indy").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChosenCharacter").append(firstChoice);
			$(".ChosenName").html(IndyNameTag);
			$(".ChosenHealth").html(IndyHP);
			chosenCharacterEmpty = false;
			$(".StarterImage #Indy").hide();

			enemyChoiceOne.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			$(".SlotOneName").html(NaziNameTag);
			$(".SlotOneHealth").html(NaziHP);

			enemyChoiceTwo.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			$(".SlotTwoName").html(ShamanNameTag);
			$(".SlotTwoHealth").html(ShamanHP);

			enemyChoiceThree.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".SlotThreeName").html(BoulderNameTag);
			$(".SlotThreeHealth").html(BoulderHP);

			$(".StarterImage").hide();

			IndyHero = true;
			
			$("h1").hide();
			$("h2").hide();

		}


		
		 
	})

	$("#Nazi").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Nazi").attr("src", "assets/images/bg.png");
			$(".ChosenCharacter").append(firstChoice);
			$(".ChosenName").html(NaziNameTag);
			$(".ChosenHealth").html(NaziHP);
			chosenCharacterEmpty = false;
			$(".StarterImage #Nazi").hide();

			enemyChoiceOne.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			$(".SlotOneName").html(IndyNameTag);
			$(".SlotOneHealth").html(IndyHP);

			enemyChoiceTwo.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			$(".SlotTwoName").html(ShamanNameTag);
			$(".SlotTwoHealth").html(ShamanHP);

			enemyChoiceThree.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".SlotThreeName").html(BoulderNameTag);
			$(".SlotThreeHealth").html(BoulderHP);

			$(".StarterImage").hide();
			NaziHero = true;
			$("h1").hide();
			$("h2").hide();

		}



	})

	$("#Shaman").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Shaman").attr("src", "assets/images/shaman.jpg");
			$(".ChosenCharacter").append(firstChoice);
			$(".ChosenName").html(ShamanNameTag);
			$(".ChosenHealth").html(ShamanHP);
			chosenCharacterEmpty = false;
			$(".StarterImage #Shaman").hide();
			enemyChoiceOne.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			$(".SlotOneName").html(NaziNameTag);
			$(".SlotOneHealth").html(NaziHP);

			enemyChoiceTwo.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			$(".SlotTwoName").html(IndyNameTag);
			$(".SlotTwoHealth").html(IndyHP);

			enemyChoiceThree.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".SlotThreeName").html(BoulderNameTag);
			$(".SlotThreeHealth").html(BoulderHP);

			$(".StarterImage").hide();
			ShamanHero = true;
			$("h1").hide();
			$("h2").hide();

		}


	})

	$("#Boulder").on("click", function(){
		if (chosenCharacterEmpty === true) {
			firstChoice.attr("id", "Boulder").attr("src", "assets/images/rock.jpg");
			$(".ChosenCharacter").append(firstChoice);
			$(".ChosenName").html(BoulderNameTag);
			$(".ChosenHealth").html(BoulderHP);
			chosenCharacterEmpty = false;
			$(".StarterImage #Boulder").hide();
			enemyChoiceOne.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".ChooseEnemySlotOne").append(enemyChoiceOne);
			$(".SlotOneName").html(NaziNameTag);
			$(".SlotOneHealth").html(NaziHP);

			enemyChoiceTwo.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".ChooseEnemySlotTwo").append(enemyChoiceTwo);
			$(".SlotTwoName").html(ShamanNameTag);
			$(".SlotTwoHealth").html(ShamanHP);

			enemyChoiceThree.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".ChooseEnemySlotThree").append(enemyChoiceThree);
			$(".SlotThreeName").html(IndyNameTag);
			$(".SlotThreeHealth").html(IndyHP);


			$(".StarterImage").hide();
			BoulderHero = true;
			
			$("h1").hide();
			$("h2").hide();
		}


	})



	$(".ChooseEnemySlotOne").on("click", function(){


		if (NewDefenderSelection === true) {
			$(".SlotTwo").show();
			$(".SlotThree").show();
			
		}

		if (IndyHero === true || ShamanHero === true || BoulderHero === true) {
			defenderPick.attr("id", "NaziChosen").attr("src", "assets/images/bg.png");
			$(".Defender").append(defenderPick);
			$(".DefenderName").html(NaziNameTag);
			$(".DefenderHealth").html(NaziHP);
			$(".SlotOne").hide();
			NewDefenderSelection = true;
			NaziDefender = true;
			IndyDefender = false;
			ShamanDefender = false;
			BoulderDefender = false;

		}

		if (NaziHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".DefenderName").html(IndyNameTag);
			$(".DefenderHealth").html(IndyHP);
			$(".SlotOne").hide();
			NewDefenderSelection = true;
			IndyDefender = true;
			ShamanDefender = false;
			BoulderDefender = false;
			NaziDefender = false;
		}


	})

	$(".ChooseEnemySlotTwo").on("click", function(){


		if (NewDefenderSelection === true) {
			$(".SlotOne").show();
			$(".SlotThree").show();
		}

		if (IndyHero === true || NaziHero === true || BoulderHero === true) {
			defenderPick.attr("id", "ShamanChosen").attr("src", "assets/images/shaman.jpg");
			$(".Defender").append(defenderPick);
			$(".DefenderName").html(ShamanNameTag);
			$(".DefenderHealth").html(ShamanHP);
			$(".SlotTwo").hide();
			NewDefenderSelection = true;
			ShamanDefender = true;
			BoulderDefender = false;
			NaziDefender = false;
			IndyDefender = false;
		}

		if (ShamanHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".DefenderName").html(IndyNameTag);
			$(".DefenderHealth").html(IndyHP);
			$(".SlotTwo").hide();
			NewDefenderSelection = true;
			IndyDefender = true;
			ShamanDefender = false;
			BoulderDefender = false;
			NaziDefender = false;
		}

	})

	$(".ChooseEnemySlotThree").on("click", function(){


		if (NewDefenderSelection === true) {
			$(".SlotTwo").show();
			$(".SlotOne").show();
		}

		if (IndyHero === true || NaziHero === true || ShamanHero === true) {
			defenderPick.attr("id", "BoulderChosen").attr("src", "assets/images/rock.jpg");
			$(".Defender").append(defenderPick);
			$(".DefenderName").html(BoulderNameTag);
			$(".DefenderHealth").html(BoulderHP);
			$(".SlotThree").hide();
			NewDefenderSelection = true;
			BoulderDefender = true;
			NaziDefender = false;
			IndyDefender = false;
			ShamanDefender = false;
		}

		if (BoulderHero === true) {
			defenderPick.attr("id", "IndyChosen").attr("src", "assets/images/Indiana-Jones.jpg");
			$(".Defender").append(defenderPick);
			$(".DefenderName").html(IndyNameTag);
			$(".DefenderHealth").html(IndyHP);
			$(".SlotThree").hide();
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
			$(".ChosenHealth").html(IndyHP);
			$(".DefenderHealth").html(NaziHP);
			$(".MessageOne").html("You attacked for " + IndyBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + NaziBaseAttack + " damage");
			if (IndyHP <= 0) {
				
				IndyHero = false;
				losegame();
				resetgame();

			}
			if (NaziHP <= 0) {
				$("#NaziChosen").remove();
				$("#NaziChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotOneName").empty();
				$(".SlotOneHealth").empty();
				NaziDefender = false;
				


			}
			if (BoulderHP <= 0 && ShamanHP <= 0 && NaziHP <= 0) {
				wingame();
			}
			

		}

		else if (IndyHero === true && ShamanDefender === true){
			ShamanHP = ShamanHP - IndyBaseAttack;
			IndyHP = IndyHP - ShamanBaseAttack;
			IndyBaseAttack = IndyBaseAttack + IndyAttackGain;
			$(".ChosenHealth").html(IndyHP);
			$(".DefenderHealth").html(ShamanHP);
			$(".MessageOne").html("You attacked for " + IndyBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + ShamanBaseAttack + " damage");
			if (IndyHP <= 0) {
				
				IndyHero = false;
				losegame();
				resetgame();

			}
			if (ShamanHP <= 0) {
				$("#ShamanChosen").remove();
				$("#ShamanChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotTwoName").empty();
				$(".SlotTwoHealth").empty();
				ShamanDefender = false;
				
			}
			if (BoulderHP <= 0 && ShamanHP <= 0 && NaziHP <= 0) {
				wingame();
			}
		}

		else if (IndyHero === true && BoulderDefender === true){
			BoulderHP = BoulderHP - IndyBaseAttack;
			IndyHP = IndyHP - BoulderBaseAttack;
			IndyBaseAttack = IndyBaseAttack + IndyAttackGain;
			$(".ChosenHealth").html(IndyHP);
			$(".DefenderHealth").html(BoulderHP);
			$(".MessageOne").html("You attacked for " + IndyBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + BoulderBaseAttack + " damage");
			if (IndyHP <= 0) {

				IndyHero = false;
				losegame();
				resetgame();
			}
			if (BoulderHP <=0) {
				$("#BoulderChosen").remove();
				$("#BoulderChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotThreeName").empty();
				$(".SlotThreeHealth").empty();
				BoulderDefender = false;
				
			}
			if (BoulderHP <= 0 && ShamanHP <= 0 && NaziHP <= 0) {
				wingame();
			}
		}

		else if (NaziHero === true && IndyDefender === true){
			IndyHP = IndyHP - NaziBaseAttack;
			NaziHP = NaziHP - IndyBaseAttack;
			NaziBaseAttack = NaziBaseAttack + NaziAttackGain;
			$(".ChosenHealth").html(NaziHP);
			$(".DefenderHealth").html(IndyHP);
			$(".MessageOne").html("You attacked for " + NaziBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + IndyBaseAttack + " damage");
			if (NaziHP <= 0) {
				
				NaziHero = false;
				losegame();
				resetgame();

			}
			if (IndyHP <= 0) {
				$("#IndyChosen").remove();
				$("#IndyChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotOneName").empty();
				$(".SlotOneHealth").empty();
				IndyDefender = false;
				
			}
			if (BoulderHP <= 0 && ShamanHP <= 0 && IndyHP <= 0) {
				wingame();
			}
		}

		else if (NaziHero === true && ShamanDefender === true){
			ShamanHP = ShamanHP - NaziBaseAttack;
			NaziHP = NaziHP - ShamanBaseAttack;
			NaziBaseAttack = NaziBaseAttack + NaziAttackGain;
			$(".ChosenHealth").html(NaziHP);
			$(".DefenderHealth").html(ShamanHP);
			$(".MessageOne").html("You attacked for " + NaziBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + ShamanBaseAttack + " damage");
			if (NaziHP <= 0) {
				
				NaziHero = false;
				losegame();
				resetgame();

			}
			if (ShamanHP <= 0) {
				$("#ShamanChosen").remove();
				$("#ShamanChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotTwoName").empty();
				$(".SlotTwoHealth").empty();
				ShamanDefender = false;
				
			}
			if (BoulderHP <= 0 && ShamanHP <= 0 && IndyHP <= 0) {
				wingame();
			}
		}

		else if (NaziHero === true && BoulderDefender === true){
			BoulderHP = BoulderHP - NaziBaseAttack;
			NaziHP = NaziHP - BoulderBaseAttack;
			NaziBaseAttack = NaziBaseAttack + NaziAttackGain;
			$(".ChosenHealth").html(NaziHP);
			$(".DefenderHealth").html(BoulderHP);
			$(".MessageOne").html("You attacked for " + NaziBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + BoulderBaseAttack + " damage");
			if (NaziHP <= 0) {
				
				NaziHero = false;
				losegame();
				resetgame();

			}
			if (BoulderHP <=0) {
				$("#BoulderChosen").remove();
				$("#BoulderChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotThreeName").empty();
				$(".SlotThreeHealth").empty();
				BoulderDefender = false;
				
			}
			if (BoulderHP <= 0 && ShamanHP <= 0 && IndyHP <= 0) {
				wingame();
			}


		}

		else if (ShamanHero === true && IndyDefender === true){
			IndyHP = IndyHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - IndyBaseAttack;
			ShamanBaseAttack = ShamanBaseAttack + ShamanAttackGain;
			$(".ChosenHealth").html(ShamanHP);
			$(".DefenderHealth").html(IndyHP);
			$(".MessageOne").html("You attacked for " + ShamanBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + IndyBaseAttack + " damage");
			if (ShamanHP <= 0) {
				
				ShamanHero = false;
				losegame();
				resetgame();

			}
			if (IndyHP <= 0) {
				$("#IndyChosen").remove();
				$("#IndyChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotTwoName").empty();
				$(".SlotTwoHealth").empty();
				IndyDefender = false;
				
			}
			if (BoulderHP <= 0 && NaziHP <= 0 && IndyHP <= 0) {
				wingame();
			}
		}

		else if (ShamanHero === true && NaziDefender === true){
			NaziHP = NaziHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - NaziBaseAttack;
			ShamanBaseAttack = ShamanBaseAttack + ShamanAttackGain;
			$(".ChosenHealth").html(ShamanHP);
			$(".DefenderHealth").html(NaziHP);
			$(".MessageOne").html("You attacked for " + ShamanBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + NaziBaseAttack + " damage");
			if (ShamanHP <= 0) {
				
				ShamanHero = false;
				losegame();
				resetgame();

			}
			if (NaziHP <= 0) {
				$("#NaziChosen").remove();
				$("#NaziChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotOneName").empty();
				$(".SlotOneHealth").empty();
				NaziDefender = false;
				
			}
			if (BoulderHP <= 0 && NaziHP <= 0 && IndyHP <= 0) {
				wingame();
			}

		}

		else if (ShamanHero === true && BoulderDefender === true){
			BoulderHP = BoulderHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - BoulderBaseAttack;
			ShamanBaseAttack = ShamanBaseAttack + ShamanAttackGain;
			$(".ChosenHealth").html(ShamanHP);
			$(".DefenderHealth").html(BoulderHP);
			$(".MessageOne").html("You attacked for " + ShamanBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + BoulderBaseAttack + " damage");
			if (ShamanHP <= 0) {
				
				ShamanHero = false;
				losegame();
				resetgame();

			}
			if (BoulderHP <=0) {
				$("#BoulderChosen").remove();
				$("#BoulderChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotThreeName").empty();
				$(".SlotThreeHealth").empty();
				BoulderDefender = false;
				
			}
			if (BoulderHP <= 0 && NaziHP <= 0 && IndyHP <= 0) {
				wingame();
			}


		}

		else if (BoulderHero === true && IndyDefender === true){
			BoulderHP = BoulderHP - IndyBaseAttack;
			IndyHP = IndyHP - BoulderBaseAttack;
			BoulderBaseAttack = BoulderBaseAttack + BoulderAttackGain;
			$(".ChosenHealth").html(BoulderHP);
			$(".DefenderHealth").html(IndyHP);
			$(".MessageOne").html("You attacked for " + BoulderBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + IndyBaseAttack + " damage");
			if (BoulderHP <= 0) {
				
				BoulderHero = false;
				losegame();
				resetgame();

			}
			if (IndyHP <= 0) {
				$("#IndyChosen").remove();
				$("#IndyChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotThreeName").empty();
				$(".SlotThreeHealth").empty();
				IndyDefender = false;
				
			}
			if (ShamanHP <= 0 && NaziHP <= 0 && IndyHP <= 0) {
				wingame();
			}
		}

		else if (BoulderHero === true && NaziDefender === true){
			NaziHP = NaziHP - BoulderBaseAttack;
			BoulderHP = BoulderHP - NaziBaseAttack;
			BoulderBaseAttack = BoulderBaseAttack + BoulderAttackGain;
			$(".ChosenHealth").html(BoulderHP);
			$(".DefenderHealth").html(NaziHP);
			$(".MessageOne").html("You attacked for " + BoulderBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + NaziBaseAttack + " damage");
			if (BoulderHP <= 0) {

				BoulderHero = false;
				losegame();
				resetgame();

			}
			if (NaziHP <= 0) {
				$("#NaziChosen").remove();
				$("#NaziChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotOneName").empty();
				$(".SlotOneHealth").empty();
				NaziDefender = false;
				

			}
			if (ShamanHP <= 0 && NaziHP <= 0 && IndyHP <= 0) {
				wingame();
			}

		}

		else if (BoulderHero === true && ShamanDefender === true){
			BoulderHP = BoulderHP - ShamanBaseAttack;
			ShamanHP = ShamanHP - BoulderBaseAttack;
			BoulderBaseAttack = BoulderBaseAttack + BoulderAttackGain;
			$(".ChosenHealth").html(BoulderHP);
			$(".DefenderHealth").html(ShamanHP);
			$(".MessageOne").html("You attacked for " + BoulderBaseAttack + " damage");
			$(".MessageTwo").html("Your enemy attacked you for " + ShamanBaseAttack + " damage");
			if (BoulderHP <= 0) {
				
				BoulderHero = false;
				losegame();
				resetgame();

			}
			if (ShamanHP <= 0) {
				$("#ShamanChosen").remove();
				$("#ShamanChosen").remove();
				$(".DefenderName").empty();
				$(".DefenderHealth").empty();
				$(".SlotTwoName").empty();
				$(".SlotTwoHealth").empty();
				ShamanDefender = false;

				
				
			}

			if (ShamanHP <= 0 && NaziHP <= 0 && IndyHP <= 0) {
				wingame();
			}
			

		}

		


	})


	function losegame() {
		$(".MessageOne").html("You have been defeated. GAME OVER!");
		$(".MessageTwo").empty();

	}

	function resetgame() {
		$(".ResetGame").show();
	}

	$(".ResetGame").on("click", function(){
		location.reload();

	})

	function wingame() {
		$(".MessageOne").html("You Win!!! Play Again!");
		$(".MessageTwo").empty();
		$(".ResetGame").show();
	}
				
	
	








})