import React from 'react';
import {View,Text,TouchableOpacity,Modal} from 'react-native';
import { AiOutlineLoading } from 'react-icons/ai';

const ModalAlert=({msj,show})=>{

    return(
      <Modal visible={show}>
          <View>
              <Text>Consultando el tiempo solicitado</Text>
              <Text>Por favor espere</Text>
              <View>
                    <AiOutlineLoading/>
              </View>
          </View>
      </Modal>
    );
}
export default ModalAlert;