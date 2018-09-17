/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  NumberTriangles = 0;
    for(i=1;i<=preferences.length;i++)
    {
      FirstElementIndex = i-1;
      FirstElementValue = preferences[FirstElementIndex];
      SecondElementIndex = FirstElementValue-1;
      SecondElementValue = preferences[SecondElementIndex];
      ThirdElementIndex = SecondElementValue-1;
      ThirdElementValue = preferences[ThirdElementIndex];
      if ((FirstElementValue == SecondElementIndex+1)&&(SecondElementValue == ThirdElementIndex+1)&&(ThirdElementValue == FirstElementIndex+1))
      {
        NumberTriangles = NumberTriangles + 1; 
      } 
    }  
    if (NumberTriangles>=3)
    {
      NumberTriangles = Math.floor(NumberTriangles / 3);
    }
    else
    {
      NumberTriangles = 0;  
    }
  /* for(i=0;i<preferences.length;i++)
  {
  
    FirstElementIndex = i;
    FirstElementValue = preferences[FirstElementIndex];
    SecondElementIndex = FirstElementValue-1;
    SecondElementValue = preferences[SecondElementIndex];
    ThirdElementIndex = SecondElementValue-1;
    ThirdElementValue = preferences[ThirdElementIndex];
    if (ThirdElementValue == FirstElementIndex)
    {
      NumberTriangles = NumberTriangles + 1; 
    } 
  }*/
  return  NumberTriangles;
};
