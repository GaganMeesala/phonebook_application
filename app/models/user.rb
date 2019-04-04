class User < ApplicationRecord

  # Finding possible number of words using keypad numbers
  def self.search(input)
    final_data = []
    array_of_combinations = [[], [], ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]]
    input_digit = input.to_s.split("")
    final_data = get_result(array_of_combinations, input_digit, "",  input_digit.length - 1, final_data)
    data = final_data.uniq.compact!
    data = data.map { |e| "'#{e}'" }.join(', ')
    users = User.find_by_sql("select * from users where name ilike any (array[#{data}])")
  end

  # recursive algorith for find possible number of words
  def self.get_result(array_of_combinations, input_digit, result, index, data)
    if index == -1
      data << "%#{result}%"
      return
    end

    digit = input_digit[index].to_i
    len = array_of_combinations[digit].length
    for i in (0..len-1) do
      data << get_result(array_of_combinations, input_digit, (array_of_combinations[digit][i] + result), index - 1, data)
    end
    data.flatten
  end
end