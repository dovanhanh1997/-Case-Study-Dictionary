let vietnamese = function (word) {
    this.word = word;

    this.getWord = function () {
        return this.word;
    }
};

let english = function (word) {
    this.word = word;

    this.getWord = function () {
        return this.word;
    }
};

let Dictionary = function () {
    this.vietnamese = [];
    this.english = [];

    this.addWord = function () {
        let vietnamWord = document.getElementById("vietnam").value;
        let engWord = document.getElementById("english").value;

        let newWordVN = new vietnamese(vietnamWord);
        let newWordEN = new english(engWord);

        this.vietnamese.push(newWordVN);
        this.english.push(newWordEN);

        document.getElementById("vietnam").value = null;
        document.getElementById("english").value = null;

    };

    this.serch = function () {
        let language = document.getElementById("language").value;
        let wordSerch = document.getElementById("wordSerch").value;
        let html = "";

        switch (language) {
            case 'english':
                html += wordSerch + "<br>";
                for (let i = 0; i < this.vietnamese.length; i++) {
                    if (wordSerch === this.vietnamese[i].word) {
                        html += this.english[i].word;
                    }
                }
                document.getElementById("result").innerHTML = html;
                break;
            case 'vietnamese':
                html += wordSerch + "<br>";
                for (let i = 0; i < this.english.length; i++) {
                    if (wordSerch === this.english[i].word) {
                        html += this.vietnamese[i].word;
                    }
                }
                document.getElementById("result").innerHTML = html;
                break;
        }
    };
    this.displayData = function () {
        document.getElementById("data").innerHTML = '<div id="englishWord">' +
            'TIẾNG ANH <br> <br>' +
            '<span id="showEng"></span>' +
            '</div>' +
            '<div id="vietnamWord">' +
            'TIẾNG VIỆT <br> <br>' +
            '<span id="showViet"></span>' +
            '</div>' +
            '</div>';
    };

    this.index = function () {
        let viet = "";
        let eng = "";

        for (let i = 0; i < this.vietnamese.length; i++) {
            viet += this.vietnamese[i].word;
            eng += this.english[i].word;
        }
        this.displayData();
        document.getElementById("showEng").innerHTML = eng;
        document.getElementById("showViet").innerHTML = viet;
    }
};


let dictionary = new Dictionary();
