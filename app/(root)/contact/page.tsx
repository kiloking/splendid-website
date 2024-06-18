"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form"
import Modal from '@/components/shared/Modal'
import { FaSpinner } from "react-icons/fa";
const Contact = () => {
  type Inputs = {
    name: string
    mail: string
    subject: string
    msg: string
  }
  const [formStatus , setFormStatus] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async(data) =>{
    const text = `姓名: ${data.name}\n電子信箱: ${data.mail}\n訊息內容: ${data.msg}`;
    const senddata = {
      to: 'kilokingw@gmail.com',
      subject: '大漁建設官網表單:'+data.subject,
      text: text
    };
    try {
      const response = await fetch('https://sendmail-api-umber.vercel.app/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(senddata)
      });
      setIsSending(true)

      const result = await response.json();
      if (response.ok) {
            console.log('傳送成功');
            sendFormStatusModal()
            setIsSending(false)
        } else {
            console.log('傳送失敗: ' + result.message);
            setIsSending(false)
        }
    } catch (error) {
      console.error('Error:', error);

    }
  }

  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },3000)
  }


  return (
    <div className='md:mt-[88px] px-10 md:px-20'>
      <div className='w-full aspect-[16/5] overflow-hidden  bg-zinc-400 rounded-lg relative'>
        <Image src='https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/contactBanner.jpg' alt="image" 
          width={200} height={24} priority={false} 
          layout="responsive" 
          objectFit="cover"
          className="w-full h-full top-0 left-0 object-cover "
          data-aos="fade"
        />
        <div className=' flex flex-col items-start gap-4  absolute md:top-10 md:left-10 top-2 left-2 z-10'>
          <div className=' bg-[#DC0000] text-white text-sm px-3 py-1 rounded-md' data-aos="fade-left">聯絡大漁</div>
          <div className='text-3xl md:text-5xl font-thin  tracking-tight text-white ' data-aos="fade-left">CONTACT US</div>
        </div>
      </div>

      <div className=' flex flex-col md:flex-row items-start gap-10 mt-10'>
        <div className='md:w-1/2 w-full'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1536.1056825897736!2d120.65004950316802!3d24.150525645010294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d965be3bd51%3A0x60d3bee9c1d4e071!2z5aSn5ryB5bu66Kit6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1718680307616!5m2!1szh-TW!2stw" 
            width="100%" 
            height="450"  
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='md:w-1/2 w-full'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full  mb-3'>
              <input type="text" className="block  bg-white  w-full
                  px-3 py-2  " placeholder="姓名"   {...register("name", { required: true})}/>
            </div>

            <div className='w-full my-3  '>
              <input type="mail" className="block  bg-white   w-full
                  px-3 py-2 " placeholder="電子信箱"   {...register("mail", { required: true})}/>
            </div>
            <div className='w-full  my-3 '>
              <input type="text" className="block  bg-white  w-full 
                  px-3 py-2  " placeholder="主旨"    {...register("subject", { required: true})}/>
            </div>
            <div className='w-full my-3  '>
              <textarea  cols="30" rows="10" className='w-full'  {...register("msg")}></textarea>
            </div>

            {errors.name && <span>This field is required</span>}
            <div className='text-[#5C2C1F] font-bold text-sm w-full mx-auto my-4'>
              <div className=' flex mt-2 text-xs md:text-base items-center justify-center'>
                <input type="checkbox"  className='px-1 mr-1' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                <div className='text-black ml-2   underline-offset-2 cursor-pointer' onClick={()=>setIsOpen(true)}> <span className='underline'>個人資料聲明事項</span>，我同意通過電話或郵件方式與我聯絡</div>
              </div>
            </div>

            <button type="submit"  className=' bg-white rounded-full w-full py-2 hover:bg-zinc-200 relative' >送出 {isSending && <div className=' absolute top-3 right-5'><FaSpinner className=' animate-spin' /></div> }</button>
          </form>
        </div> 

      </div>


    {/* Modal */}
    {formStatus &&
       <Modal>
        <div className='bg-[#00000080] w-full h-full  absolute inset-0 z-0  ' onClick={()=>setFormStatus(!formStatus)}></div>
        <div className={` absolute z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-white mx-auto px-5 py-4  rounded-sm border-slate-200 w-2/5`}>
          <div className='text-base font-bold mt-5 pb-5'> 表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！</div>
        
        </div>
       </Modal> 
      }
      {isOpen && 
      <Modal>
        <div className='bg-[#00000080] w-full h-full  absolute inset-0 z-0  ' onClick={()=>setIsOpen(!isOpen)}></div>
        <div className=' absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-3/5 h-4/5 bg-white mx-auto px-10 py-10 rounded-sm border-slate-200 overflow-y-scroll'>
          <div className='text-lg font-bold mt-4 border-b-1 border-[#999] pb-15'>個人資料保護政策暨隱私權聲明</div>
          <div className='text-base  text-zinc-500 leading-8 mb-6 mt-6'>本公司依據個人資料保護法，向您告知以下隱私權政策規範，若您勾選「我同意隱私權政策」，將表示您已同意本公司之隱私權政策，並同意本公司依以下告知事項，就您的個人資料進行蒐集、處理及利用。您可以自由選擇是否提供相關個人資料，若您拒絕，本公司將可能無法執行本告知事項蒐集目的之業務，致無法向您提供相關服務：</div>

          <div className='text-lg ont-bold mt-4'>一、蒐集目的和使用方式：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司依據個人資料保護法及相關法令之規定，為了提供您登錄網站、索取資料、訂閱資訊、反應意見、進行各種諮詢等服務；或為了與您聯繫、行銷（包括但不限於廣告及各項商品、活動、促銷、優惠訊息之通知等）、執行消費者及客戶管理分析、執行各種公司營業登記項目或組織章程所定業務範圍內之必要行為，對您的個人資料進行蒐集、處理、利用及國際傳輸。</div>

          <div className='text-lg ont-bold mt-4'>二、蒐集之個人資料類別：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司向您蒐集的個人資料，依據「個人資料保護法之特定目的及個人資料之類別」，包含但不限於識別類、特徵類、社會情況、財務細節、商業資訊或其他等類別，例如姓名、行動電話、住家、辦公室電話號碼、E-mail、地址、身分證統一編號、性別、出生年月日或其他得以直接或間接識別您個人之資料。</div>

          <div className='text-lg ont-bold mt-4'>三、個人資料利用之對象、地區、期間和方式：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>(一) 對象：您所提供給本公司之個人資料，可能在蒐集目的之範圍內被分享給本公司之關係企業、其他與本公司有業務往來之機構、依法有調查權之機關或其他政府機構、或其他未受中央目的事業主管機關限制之國際傳輸個人資料接收者。 (二) 地區：前開對象所在地及國際傳輸所涉地點，包含但不限於中華民國。 (三) 期間：包括個人資料蒐集目的之存續期間、依相關法令或契約約定之保存期限、或本公司因執行業務所必須之保存期間。 (四) 方式：以自動化機器或其他非自動化之利用方式，包括但不限於以書面、電話、簡訊、傳真、電子郵件、網際網路、紙本或其他基於蒐集目的且合於當時科學技術之適當方式，對您提供的個人資料進行蒐集、處理及利用。</div>

          <div className='text-lg ont-bold mt-4'>四、依據個人資料保護法第3條，您得就個人資料行使以下權利：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司對您的個人資料，將採行妥適安全之措施加以保護，並避免被不當使用。您可隨時透過本公司官方網站揭露之通訊方式，就您提供的個人資料行使下列權利：(1)請求查詢或閱覽；(2)製給複製本；(3)請求補充或更正；(4)請求停止蒐集、處理及利用；及(5)請求刪除。</div>

          <div className='text-lg ont-bold mt-4'>五、本告知事項暨同意書之修訂：</div>
          <div className='text-base text-zinc-500 leading-8 mb-6'>本公司有權隨時修訂本隱私權政策之告知事項暨同意書，並於修訂後公佈在本公司官方網站，敬請隨時查閱。若您有任何問題，敬請透過本公司官方網站揭露之通訊方式進行聯繫，我們將儘快為您服務。</div>
         
        </div>
      </Modal>  }
      {/* Modal end */}
    </div>
  )
}

export default Contact