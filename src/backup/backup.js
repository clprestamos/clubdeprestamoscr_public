var users = require('./users.json');

var results = users.results;

// var zipList = results.map(function (item, key) {
//   console.log('INSERT INTO zipcodelist_tb("province", "canton", "district", "zip_code") VALUES(\'' + item.province + '\', \'' + item.canton + '\', \'' + item.district + '\', ' + item.zipCode + ');');
// });
for (var i = 0; i < 274; i++) {
  console.log('INSERT INTO clients_tb("user_id", "loan_id") VALUES(' + (i + 1) + ', ' +  (i + 1) + ');');
}
// var userList = results.map(function (user, key) {
//   const amount = user.amount;
//   const term = user.term;
//   const reason = user.reason;
//   const company = user.company;
//   const stateId = user.stateId;
//   const requestLoanDate = user.requestLoanDate;
//   const lastUpdate = user.lastUpdate;
//   const interest = user.interest;
//   const score = user.score;
//   const approvedDate = user.approvedDate;
//
//   const result =  'INSERT INTO users_tb("amount", "term", "reason", "company", "state_id", "request_loan_date", "last_update", "interest", "score", "approved_date") VALUES ('
//   + (amount ? amount : 'xxx') + ', \''
//   + (term ? term : 'xxx') + '\', \''
//   + (reason ? reason : 'xxx') + '\', \''
//   + (company ? company : 'xxx') + '\', '
//   + (stateId ? stateId : 'xxx') + ', \''
//   + (requestLoanDate ? requestLoanDate : 'xxx') + '\', \''
//   + (lastUpdate ? lastUpdate : 'xxx') + '\', '
//   + (interest ? interest : 'xxx') + ', '
//   + (score ? score : 'xxx') + ', \''
//   + (approvedDate ? approvedDate : 'xxx')
//   + ');';
//   console.log(result);
//   return result;
// });

// var userList = results.map(function (user, key) {
//   const name = user.name;
//   const lastName = user.lastName;
//   const identification = user.identification;
//   const nationality = user.nationality;
//   const phone = user.cellphone;
//   const referencePhone = user.referencePhone
//   const email = user.email;
//   const address = user.address;
//   const province = user.province;
//   const canton = user.canton;
//   const district = user.district;
//   const zipCode = user.zipCode;
//   const relativePhone = user.relativePhone;
//   const cellphone = user.cellphone;
//   const facebook = null;
//   const twitter = null;
//   const signupDate = user.signupDate;
//   const lastSigninDate = user.lastSigninDate;
//   const isActive = true;
//   const roleId = 2;
//   const paymentId = null;
//   const password = user.password;
//   const lastUpdate = user.lastUpdate;
//   const passwordKey = null;
//   const passwordDate = null;
//   const bank = user.bank;
//   const clientAccount = user.clientAccount;
//   const iban = user.iban;
//   const avatar = null;
//   const sex = user.sex;
//   const maritalStatus = user.maritalStatus;
//   const home = user.home;
//   const otherProperties = user.otherProperties;
//   const jobSector = user.jobSector;
//   const jobCategory = user.jobCategory;
//   const academicLevel = user.academicLevel;
//   const hasVehicle = user.hasVehicle;
//   const jobTime = user.jobTime;
//   const age = user.age;
//   const salary = user.salaryMonth;
//   const credit = user.creditPayments;
//   const result =  'INSERT INTO users_tb("name", "last_name", "identification", "nationality", "phone", "reference_phone", "email", "address", "province", "canton", "district", "zip_code", "relative_phone", "cellphone", "facebook", "twitter", "signup_date", "last_singin_date", "is_active", "role_id", "payment_id", "password", "last_update", "password_key", "password_date", "bank", "client_account", "iban", "avatar", "sex", "marital_status", "home", "other_properties", "job_sector", "job_category", "academic_level", "has_vehicle", "job_time", "age", "salary", "credit") VALUES (\''
//   + (name ? name : 'xxx') + '\', \''
//   + (lastName ? lastName : 'xxx') + '\', \''
//   + (identification ? identification : 'xxx') + '\', \''
//   + (nationality ? nationality : 'xxx') + '\', \''
//   + (phone ? phone : 'xxx') + '\', \''
//   + (referencePhone ? referencePhone : 'xxx') + '\', \''
//   + (email ? email : 'xxx') + '\', \''
//   + (address ? address : 'xxx') + '\', \''
//   + (province ? province : 'xxx') + '\', \''
//   + (canton ? canton : 'xxx') + '\', \''
//   + (district ? district : 'xxx') + '\', '
//   + (zipCode ? zipCode : 'xxx') + ', \''
//   + (relativePhone ? relativePhone : 'xxx') + '\', \''
//   + (cellphone ? cellphone : 'xxx') + '\', \''
//   + (facebook ? facebook : 'xxx') + '\', \''
//   + (twitter ? twitter : 'xxx') + '\', \''
//   + (signupDate ? signupDate : 'xxx') + '\', \''
//   + (lastSigninDate ? lastSigninDate : 'xxx') + '\', '
//   + (isActive ? isActive : 'xxx') + ', '
//   + (roleId ? roleId : 'xxx') + ', \''
//   + (paymentId ? paymentId : 'xxx') + '\', \''
//   + (password ? password : 'xxx') + '\', \''
//   + (lastUpdate ? lastUpdate : 'xxx') + '\', \''
//   + (passwordKey ? passwordKey : 'xxx') + '\', \''
//   + (passwordDate ? passwordDate : 'xxx') + '\', \''
//   + (bank ? bank : 'xxx') + '\', '
//   + (clientAccount ? clientAccount : 'xxx') + ', '
//   + (iban ? iban : 'xxx') + ', \''
//   + (avatar ? avatar : 'xxx') + '\', \''
//   + (sex ? sex : 'xxx') + '\', \''
//   + (maritalStatus ? maritalStatus : 'xxx') + '\', \''
//   + (home ? home : 'xxx') + '\', '
//   + (otherProperties ? otherProperties : 'xxx') + ', \''
//   + (jobSector ? jobSector : 'xxx') + '\', \''
//   + (jobCategory ? jobCategory : 'xxx') + '\', \''
//   + (academicLevel ? academicLevel : 'xxx') + '\', '
//   + (hasVehicle ? hasVehicle : 'xxx') + ', \''
//   + (jobTime ? jobTime : 'xxx') + '\', '
//   + (age ? age : 'xxx') + ', '
//   + (salary ? salary : 'xxx') + ', '
//   + (credit ? credit : 'xxx')
//   + ');';
//   console.log(result);
//   return result;
// });
