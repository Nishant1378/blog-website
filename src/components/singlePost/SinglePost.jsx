import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <h1 className="singlePostTitle">Lorem, ipsum dolor. 
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Safak</b></span>
                <span className="singlePostDate">1 Hour Ago</span>                       
            </div>
            <p className="singlePostDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nam error modi a enim eligendi quasi nisi adipisci aliquid? Eligendi nam obcaecati repellat nobis, odit expedita aliquam magnam. Qui, eum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nam error modi a enim eligendi quasi nisi adipisci aliquid? Eligendi nam obcaecati repellat nobis, odit expedita aliquam magnam. Qui, eum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nam error modi a enim eligendi quasi nisi adipisci aliquid? Eligendi nam obcaecati repellat nobis, odit expedita aliquam magnam. Qui, eum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nam error modi a enim eligendi quasi nisi adipisci aliquid? Eligendi nam obcaecati repellat nobis, odit expedita aliquam magnam. Qui, eum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nam error modi a enim eligendi quasi nisi adipisci aliquid? Eligendi nam obcaecati repellat nobis, odit expedita aliquam magnam. Qui, eum.
            </p>
        </div>
    </div>
  )
}

export default SinglePost
