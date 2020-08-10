//Imports enzyme modules and more
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//Imports enzyme to json for best work with JestSnapshots
import { createSerializer } from 'enzyme-to-json'
//Configures

Enzyme.configure({ adapter: new Adapter() }); //Enzyme configuration

//Configuration of enzymeToJson and enzyme with snapshots funtionality
expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); 


// import '@testing-library/jest-dom/extend-expect'  *JEST EXTEND EXPECT