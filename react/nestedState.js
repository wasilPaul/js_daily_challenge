/*Nested state example*/
this.state = {
   someProperty: {
      someOtherProperty: {
         anotherProperty: {
            flag: true
         }
      }
   }
}

/*setState using spread operator at each level*/

this.setState(prevState => ({
   ...prevState,
   someProperty: {
      ...prevState.someProperty,
      someOtherProperty: {
         ...prevState.someProperty.someOtherProperty,
         anotherProperty: {
            ...prevState.someProperty.someOtherProperty.anotherProperty,
            flag: false
         }
      }
   }
}))