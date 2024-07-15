package myproject;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;
public class GridLyoutClass {
	

	public static void main(String[] args) {
		JFrame frame=new JFrame();
		frame.setSize(450, 420);
		frame.setTitle("RUPESH BAR AND RESTAURENT");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
		frame.setLayout(null);
		
		
		
		JLabel label1=new JLabel();
		label1.setBounds(20, 20, 200,50);
		label1.setText("CUSTOMER NAME");
		//label1.setFont(new Font("My Boli"Font.PLAIN),35);
		JLabel label2=new JLabel();
		label2.setBounds(20,80 ,200 , 50);
		label2.setText("CUSTOMER ID");
		JLabel label3=new JLabel();
		label3.setBounds(20,140 ,200 , 50);
		label3.setText("CUSTOMER AGE");
		JLabel label4=new JLabel();
		label4.setBounds(20,200 ,200 , 50);
		label4.setText("CUSTOMER VILLAGE");
		JLabel label5=new JLabel();
		label5.setBounds(20,260 ,200 , 50);
		label5.setText("SERIAL NUMBER");

		JTextField field1=new JTextField("SANKU PAVAN ");
		field1.setBounds(230, 20, 200, 50);
		JTextField field2=new JTextField("NEKENDHUKU");
		field2.setBounds(230, 80, 200, 50);
		JTextField field3=new JTextField("40");
		field3.setBounds(230, 140, 200, 50);
		JTextField field4=new JTextField("VADI VUREY");
		field4.setBounds(230,200, 200, 50);
		JTextField field5=new JTextField("420");
		field5.setBounds(230, 260, 200, 50);
		
		
		JButton b1=new JButton("submit");
		b1.setBounds(100, 350, 200,50);
		
		frame.add(label1);
		frame.add(label2);
		frame.add(label3);
		frame.add(label4);
		frame.add(label5);
		frame.add(field1);
		frame.add(field2);
		frame.add(field3);
		frame.add(field4);
		frame.add(field5);
		frame.add(b1);
		
		b1.addActionListener(new  ActionListener() {

			private String village;
			private String name;

			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					name = field1.getText();
					int id=Integer.parseInt(field2.getText());
					int age=Integer.parseInt(field3.getText());
					village = field3.getText();
					if (age<18)
					{
						throw new agenotvalidException(age);
				    System.out.println(e1);
					JOptionPane.showMessageDialog(b1,"age should be greater than 18");
					}
					
				}
				catch(agenotvalidException e1) {
				  
				}
				catch(NumberFormatException ex) {
					JOptionPane.showMessageDialog(b1, "enter valid numbers");
				}
				
				finally {}
			}
			
			
		}
				
				
				
				);
	}
	@SuppressWarnings("serial")
 class agenotvalidException extends Exception {
		
		agenotvalidException(){
			JOptionPane.showMessageDialog(null, "invalid Age");
		}
		agenotvalidException(int age){
			super(age);
			JOptionPane.showConfirmDialog(null, "invalid age age less than 18");
			
		}
	}

}