function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'Java', 'Python', 'C++'],
        address: {
            street: '123 Main St',
            city: 'Boston',
            state: 'MA'
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    }
    return member;
}