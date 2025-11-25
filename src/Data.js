export const API_KEY = 'AIzaSyDC8QXZ5JihSDhJ7p4tNGCWHIz2cdPn-w4'

export const value_converter = (value) => {
  if(value>=1000000){
    return Math.floor (value/1000000)+"M";
  }
  else if(value>=1000){
    return Math.floor (value/1000)+"K";
  }
  else{
    return value;
  }
}