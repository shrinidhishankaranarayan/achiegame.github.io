import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-achi';
  public classList=[];
  public userClicked=[];
  public userChoiceId=[];
  public computerChoiceId=[];
  public clickCount=0;
  public computerClicked=[];
  public arrayOfChoices=[[0,3,6],[0,1,2],[0,4,8], [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
  public choiceCombinationList=[];
  public firstClick=[];

  ngOnInit(){
    for(let i=0;i<9;i++){
      this.classList.push('circle crc'+(i+1));
      this.userClicked.push(false);
      this.computerClicked.push(false);

    }

    
    console.log(this.userClicked);
  }

  clickFromUser(event){
    if(this.clickCount<4){
      this.clickCount+=1;
      this.userClicked[event]=true;
      this.userChoiceId.push(event);
      if(this.clickCount===1){
        for(let i=0;i<this.arrayOfChoices.length;i++){
          if(this.arrayOfChoices[i].includes(+this.userChoiceId[0])){
            this.choiceCombinationList.push(this.arrayOfChoices[i]);
          }
        }
        console.log(this.choiceCombinationList);
        this.firstClick=this.choiceCombinationList[Math.floor(Math.random()*(this.choiceCombinationList.length-1))];
        if(this.firstClick.indexOf(+this.userChoiceId[0])===(this.firstClick.length-1)){
          this.computerChoiceId.push(this.firstClick[0]);
        }

        else{
          this.computerChoiceId.push(this.firstClick[this.firstClick.indexOf(+this.userChoiceId[0])+1]);
        }
        this.computerClicked[this.computerChoiceId[0]]=true;
        console.log(this.computerChoiceId);
      }
      //Next click contains in the 
      let secondChoiceArray=[];
      if(this.clickCount==2){
        let count2=0;
        for(let choice in this.arrayOfChoices){
          console.log(choice);
          console.log(this.arrayOfChoices);
          let tempVar;
          
          for(let el  in this.userChoiceId){
            if(choice.includes(el)){
              count2+=1;
            }
            
          }

          if(count2==2){
            let tempArr=choice;
            for(let el in this.computerChoiceId){
              //tempArr.splice(tempArr.indexOf(el),1);
            }
            console.log(tempArr);
            console.log(choice);
            break;
          }

        let redFalg=true;
        if(count2==0){
          for(let i=0;i<this.choiceCombinationList.length;i++){
            if(this.choiceCombinationList[i].includes(+event)){
              console.log(this.choiceCombinationList[i]);
              for(let ele in this.userChoiceId){
                let count=0;
                let varNeeded;
                for(let j=0;j<this.choiceCombinationList[i].length;j++){
                  console.log(ele);
                  console.log(this.choiceCombinationList[i][j])
                  if(ele==this.choiceCombinationList[i][j]){
                    
                    count+=1;
                    break;
                  }
                  else{
                    varNeeded=this.choiceCombinationList[i][j];
                  }
  
                  if(count==2){
                    if(! this.computerChoiceId.includes(varNeeded) &&(!this.userChoiceId.includes(varNeeded))){
                      this.computerChoiceId.push(varNeeded);
                      this.computerClicked[varNeeded]=true;
                      redFalg=false;
                    }
                    
                  }
                }
                
              }
              
    
            }
           
          }
          if(redFalg){
            
            for(let i=0;i<this.arrayOfChoices.length;i++){
              console.log(this.arrayOfChoices[i]);
              console.log(event);
              if(this.arrayOfChoices[i].includes(+event)){
                secondChoiceArray.push(this.arrayOfChoices[i]);
              }
            }
            console.log(secondChoiceArray);
            this.firstClick=secondChoiceArray[Math.floor(Math.random()*(secondChoiceArray.length-1))];
            console.log(this.firstClick);
            if(this.firstClick.indexOf(+this.userChoiceId[1])===(this.firstClick.length-1)){
              this.computerChoiceId.push(this.firstClick[0]);
            }
    
            else{
              this.computerChoiceId.push(this.firstClick[this.firstClick.indexOf(+this.userChoiceId[1])+1]);
            }
            console.log(this.computerClicked[this.computerChoiceId[1]]);
            this.computerClicked[this.computerChoiceId[1]]=true;
            
          }

        }
        
        
      

      }

      if(this.clickCount==3){
        for(let choice in this.arrayOfChoices){
          let tempVar;
          let count2=0;
          for(let el  in this.computerChoiceId){
            if(choice.includes(el)){
              count2+=1;
            }
            
          }

          if(count2==2){
            let tempArr=[...choice];
            for(let el in this.computerChoiceId){
              tempArr.splice(tempArr.indexOf(el),1);
            }
            console.log(tempArr);
            break;
          }
        }

      }
    
      
      
    }
    

  }
}
