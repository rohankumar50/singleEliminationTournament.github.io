let number_of_matches;
let number_of_rounds;
let number_of_participants;

function showResult() {
    number_of_participants = document.getElementById("number_of_participant").value;

    number_of_matches = number_of_participants - 1;
    document.getElementById("number_of_matches").value = number_of_matches


    number_of_rounds = Math.ceil(Math.log2(number_of_participants))

    document.getElementById("number_of_rounds").value = number_of_rounds

}