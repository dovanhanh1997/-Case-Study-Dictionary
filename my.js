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
    this.vietnamWord = [];
    this.englishWord = [];

    this.getVietnamWord = function () {
        return this.vietnamWord;
    };
    this.getEnglishWord = function () {
        return this.englishWord();
    };

    this.addNewWord = function () {
        let vietnamWord = document.getElementById("vietnam").value;
        let engWord = document.getElementById("english").value;

        this.vietnamWord.push(new vietnamese(vietnamWord));
        this.englishWord.push(new english(engWord));

        this.clearInput();
    };

    this.search = function () {
        let languageTo = document.getElementById("language").value;
        let wordSearch = document.getElementById("wordSearch").value;
        let html = "";

        switch (languageTo) {
            case "english":
                html += wordSearch + "<br>";
                for (let i = 0; i < this.vietnamWord.length; i++) {
                    if (wordSearch === this.vietnamWord[i].getWord()) {
                        html += this.englishWord[i].getWord();
                    }
                }
                document.getElementById("result").innerHTML = html;
                break;
            case "vietnamese":
                html += wordSearch + "<br>";
                for (let i = 0; i < this.englishWord.length; i++) {
                    if (wordSearch === this.englishWord[i].word) {
                        html += this.vietnamWord[i].word;
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

    this.displayWord = function () {
        let viet = "";
        let eng = "";

        for (let i = 0; i < this.vietnamWord.length; i++) {
            viet += this.vietnamWord[i].word;
            eng += this.englishWord[i].word;
        }
        console.log(viet);
        console.log(eng);
        this.displayData();
        document.getElementById("showEng").innerHTML = eng;
        document.getElementById("showViet").innerHTML = viet;
    };

    this.clearInput = function () {
        document.getElementById("vietnam").value = null;
        document.getElementById("english").value = null;
    }

};

let dictionary = new Dictionary();

