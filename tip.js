//�Ƿ���������ַ���
/[\u4E00-\u9FA5]/g.test(value)

//�������
!/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(this.value)||/[\u4E00-\u9FA5]/g.test(this.value)||/\s/.test(this.value)


//��ֹѡ��
//.cannot_select{
//    -moz-user-select:none;/*���*/
//    -webkit-user-select:none;/*webkit�����*/
//    -ms-user-select:none;/*IE10*/
//    user-select:none;
//}

//document.observe('dom:loaded', function () {console.log(1)});?????

//https://gtmetrix.com ��վ���ܷ���