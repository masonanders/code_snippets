class Array
  def splice(index, elements, *new_elements)
    left = self[0...index]
    right = self[(index + elements)..-1]
    left + new_elements + right
  end
end
