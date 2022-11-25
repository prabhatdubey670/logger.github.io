import React, { useState } from "react";
import { Text, View, TextInput, Button, ScrollView } from "react-native";
function Todocomp() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
  };
  return (
    <View>
 

    <View className="p-3 py-5  ">
      <Text>Add Your todo list tasks here !  </Text>

      <TextInput
        placeholder="Input your task here "
        onChangeText={(text) => setTodoItem(text)}
        value={todoItem}
        className="border-gray-300 py-3 rounded-lg my-3 border-2 px-3"
      />
      <Button title="Add Todo" onPress={addTodoList} />
      <Text className="pt-4 text-lg">List Items : </Text>
      <ScrollView>
        {todoList.map((todo) => (
          <View
            key={todo}
            className="border-blue-300 py-3 rounded-lg my-1 border-2 px-3 bg-gray-50"
          >
            <Text> {todo} </Text>
          </View>
        ))}
      </ScrollView>
    </View>
    </View>
  );
}

export default Todocomp;
