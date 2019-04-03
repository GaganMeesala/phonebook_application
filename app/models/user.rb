class User < ApplicationRecord
  def self.search(search_key)
    where("name || number ilike ?", "%#{search_key}%")
  end
end
