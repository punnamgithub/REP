describe('Test Spec', () => {
  it('Test Pass', () => {
    
    cy
  .fixture('Test')
  .then( Test => {
    expect(Test.color).to.eq("red")
    expect(Test.id).to.eq(4)
	
	
    expect(Test.available).to.eq(false)

	//Aravind commits
    
  }
  )

  })
})