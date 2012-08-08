class AddEmailUniquenessIndex < ActiveRecord::Migration
  def self.up
     add_index :email, :unique => true
  end

  def self.down
     remove_index :email
  end
end
