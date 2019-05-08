(function($) {

	$(document).on("change", ".chose-sort",function() {
		var sortingMethod = $(this).val();
		if (sortingMethod == '12h') {
			sortProductsPriceAscending();
		}
		else if (sortingMethod == 'h21') {
			sortProductsPriceDescending();
		}
	});
	/*
		Sắp xếp cái giá cả
	 */
	function sortProductsPriceAscending(){
		var data = $(".col-item.col-sm-7.col-md-4").find(".price-item").sort(function(a,b){
			return Number($(a).text().split("$ ").join("").split(".00").join("")) - Number($(b).text().split("$ ").join("").split(".00").join(""))
		});
		// while (data.parent().length>=3) {
		// 	$.each(data.parent().splice(0,3), function(index, el) {
		// 		$(".middle-shop-list.row").empty().append(el.outerHTML)
		// 	});
		// }		
	}
	/*
	Cái dưới chưa cần, làm cái trên đi, thường thì t đéo làm kiểu này :)), chứ m làm cái chi để sort đc giá của data
	thường thì đem nó sort luôn trên sv rồi mới render ra,.....hinfh nhu vòng lặp vô tận hay sao :)) mà 
	đm chucwno schạykhanrk biết
	m chay nuw no laij rua

	 */
	function sortProductsPriceDescending(){
		// var products = $('.product');
		// products.sort(function(a, b){ 
		// 	return $(a).data("price") - $(b).data("price")
		// });
		// $(".products-grid").html(products);
	}

})(jQuery);
