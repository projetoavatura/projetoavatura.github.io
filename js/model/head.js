class head extends shape 
{

    constructor(id = 0)
    {
        let path = 'data/head/';
        let options = 
        {
            0: 
            {
                'countEyes': 0,
                'countEars': 0,
                'name': null 
            },
            1: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Oval' 
            },
            2: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Square'  
            },
            3: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Triangle' 
            },
        };
        super(id, path, options);
        
    }

    getCountEyes()
    {
        return this.options[this.id]['countEyes'];
    }

    getCountEars()
    {
        return this.options[this.id]['countEars'];
    }

    getEyesSpacing()
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                spacing['top'] = 0;   
                spacing['left'] = 0; 
                break;
            case 2:
                spacing['top'] = 0;   
                spacing['left'] = 0; 
                break;
            case 3:
                spacing['top'] = 0;   
                spacing['left'] = 0; 
                break;
        }
        spacing['index'] = 7;
        return spacing;
    }

    getEarSpacing(ear)
    {
        let spacing = [];
        spacing['index'] = 6
        switch (this.id) {
            case 1:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 2:
                spacing['top'] = -180 - ((ear-1)*200);
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -100;  
                        break;
                    case 2:
                        spacing['left'] = 150;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                } 
                break;
            case 3:
                spacing['top'] = -175 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -80;  
                        break;
                    case 2:
                        spacing['left'] = 130;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                } 
                break;
        }
        return spacing;
    }


}