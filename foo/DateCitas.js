import React,{useState,useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import {Text,TouchableOpacity,StyleSheet,ScrollView, View} from 'react-native'

let time=new Date();
    let dia=time.getDate();
    let mes=time.getMonth()+1;
    let year=time.getFullYear();
    let ne=`${year}-${mes}-${dia}`;


const DateCitas=({prof})=>{
    const style=StyleSheet.create({
        calender:{
            height:'100%'
        }
    })
    
    const [select, setSelect] = useState(ne)

    const onDayPress=(day)=>{
      setSelect(day.dateString)  
    }

    
    return(
      <ScrollView>
          <Text style={{fontWeight:'bold',fontSize:'12px',padding:8}}>Hora para la cita con {prof.name}</Text>

          <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',paddingRight:6}}>
              <Calendar 
                style={style.calender}
                current={ne}
                minDate={`${year}-${mes}-1`}
                markedDates={{
                  [select]:{
                    selected:true,
                    marked:true,
                    selectedTextColor:'white',
                    selectedColor:'rgba(0,40,255,0.9)'
                  }
                }}
                theme={{
                  arrowColor:"red",
                  todayBackgroundColor:"rgba(0,255,40,0.9)",
                  todayTextColor:'rgba(0,0,0,0.9)',
                  calendarBackground:"rgba(250,250,250,0.9)",
                  'stylesheet.calendar.header':{
                    dayTextAtIndex0:{
                      color:"red",
                      fontWeight:300
                    }
                  }
                }}
                disableArrowLeft={true}
                disableArrowRight={true}
                hideArrows={false}
                onDayPress={onDayPress}

                />
                
          </View>

      </ScrollView>
    );
}
export default DateCitas;