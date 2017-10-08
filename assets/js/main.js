

/*
 - Main class.
 - Initialize Framework7 and Dom7 here.
 - Define data source.
 - Create chips programmatically based on the data we have in the data source.
 */
var mainClass=function()
{
    /*
     -Initialize your app
     -Export selectors engine
     */
    var myApp = new Framework7();
    var $$ = Dom7;
    var galaxies=["StarBust","Cartwheel","MilkyWay","Sombrero","Whirlpool","IC1011"];

    /*
     - Initialize app
     */
    this.initializeApp=function()
    {
        $$('#setChipsBtn').on('click', function () {
            m=new mainClass();
            document.getElementById('displaySectionID').innerHTML="";
            for(var i=0;i<galaxies.length;i++)
            {
                document.getElementById('displaySectionID').appendChild(m.createChip(galaxies[i]));
            }
        });
    }
    /*
     - Create and return a chip
     */
    this.createChip=function(galaxyName)
    {
        //chip
        var chip=document.createElement('div');
        chip.className='chip';

        //chip label
        var chipLabel=document.createElement('div');
        chipLabel.className='chip-label';
        chipLabel.appendChild(document.createTextNode(galaxyName));

        //chip media
        var chipMedia=document.createElement('div');
        chipMedia.className='chip-media bg-teal';
        chipMedia.appendChild(document.createTextNode(galaxyName[0].toUpperCase()));

        //chip delete btn
        var deleteBtn=document.createElement('a');
        deleteBtn.setAttribute('href','#');
        deleteBtn.className='chip-delete';

        chip.appendChild(chipMedia);
        chip.appendChild(chipLabel);
        chip.appendChild(deleteBtn);

        //delete chip
        deleteBtn.onclick=function (e) {
            e.preventDefault();
            myApp.confirm('Do you want to delete '+galaxyName, function () {
                chip.remove();
            });
        };

        return chip;
    }
}

m=new mainClass();
m.initializeApp();