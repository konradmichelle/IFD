
window.addEventListener("load", function () {
    document.querySelector('button').addEventListener("click", function () {



        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Neue Aufgabe wird erstellt:" +wildcard)
            }
        });


        artyom.addCommands([
            {
                indexes: ["Hey Tommy", "Hi Tommy", "Hallo Tommy", "Hallo Tommy"],
                action: function(i){
                    console.log ("Hey Michelle!")
                    document.getElementById('ich').innerHTML ="Hey Michelle!";
                    artyom.say("Hey Michelle!");
                }
            },
            {
                indexes: ["Wie viel Zeit muss ich diese Woche für * aufwenden"],
                smart: true,
                action: function (i, wildcard) {
                    artyom.say("Für diese Woche musst du noch 2,5 Stunden für " + wildcard + " aufwenden");
                    document.getElementById('ich').innerHTML = "Für diese Woche musst du noch 2,5 Stunden für " + wildcard + " aufwenden";
                }
            },
            {
                indexes: ["Wann ist die nächste Abgabe"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Die nächste Abgabe ist Streaming Anwendung am Montag, den 14 06.";
                    artyom.say("Die nächste Abgabe ist Streaming Anwendung am Montag, den 14 06.");
                }
            },

            {
                indexes: ["Danke"],
                action: function(i){
                    document.getElementById('ich').innerHTML = "Kann ich dir noch weiterhelfen?";
                    artyom.say("Kann ich dir noch weiterhelfen?");
                }
            },
            {
                indexes: ["Was muss gemacht werden"],
                action: function(i){
                    document.getElementById('ich').innerHTML = "Streaming Camp Dokumentation." ;
                    artyom.say("Streaming Camp Dokumentation.");
                }
            },
            {
                indexes: ["Welche Todos stehen für Heute an","Tattoos"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Heute musst du Spanisch Aufgabe 1B machen.";
                    artyom.say("Heute musst du Spanisch Aufgabe 1B machen.");
                }
            },
            {
                indexes: ["Ich möchte einen neuen Termin eintragen"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Was für ein Termin möchtest du eintragen?";
                    artyom.say("Was für ein Termin möchtest du eintragen?");
                }
            },
            {
                indexes: ["Streaming Anwendung Verständnisfragen abgeben"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Für wann ist die Abgabe vorgesehen?";
                    artyom.say("Für wann ist die Abgabe vorgesehen?");
                }
            },

            {
                indexes: ["18 06 21"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Streaming Anwendung Verständnisfragen abgeben am 18.06.2021 ist eingetragen. \n" +
                        "Ist das korrekt? ";
                    artyom.say("Streaming Anwendung Verständnisfragen abgeben am 18.06.2021 ist eingetragen. \n" +
                        "Ist das korrekt? ");
                }
            },

            {
                indexes: ["Was für Veranstaltungen habe ich heute"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Du hast Heute Englisch um 14.15 Uhr und Interface Design um 17.30 Uhr";
                    artyom.say("Du hast Heute Englisch um 14.15 Uhr und Interface Design um 17.30 Uhr");
                }
            },

            {
                indexes: ["Ich möchte meine Zeit tracken","Ich möchte meine Zeit trekken"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="An welchem Fach hast du Heute gearbeitet?";
                    artyom.say("An welchem Fach hast du Heute gearbeitet?");
                }
            },

            {
                indexes: ["Selbstorganisation"],
                action: function(i){
                    document.getElementById('ich').innerHTML ="Wie lange hast du an Selbstorganisation gearbeitet?";
                    artyom.say("Wie lange hast du an Selbstorganisation gearbeitet?");
                }
            },

            {
                indexes: ["1,5 Stunden","1 komma 5 Stunden"],
                action: function(i){
                    document.getElementById('ich').innerHTML =" Selbstorganisation 1,5 Stunden ist eingetragen. Ist das korrekt?";
                    artyom.say(" Selbstorganisation 1,5 Stunden ist eingetragen. Ist das korrekt?");
                }
            },
        ]);

        artyom.redirectRecognizedTextOutput(function(text,isFinal) {
            var span = document.getElementById ('tommi');
            span.innerHTML = text;

            //Quelle: Einige Fragmente sind von Anastasia Hirt entnommen wurden
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
    });

})
