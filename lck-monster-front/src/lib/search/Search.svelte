<script>
</script>

<!--Flex div center fix-->
<div class="container" style="margin-top: 9em; color: white;">
    <div class="row">
        <div class="col-">
            <div class="row">
                <form class="row d-flex justify-content-center">
                    <div class="col-auto">
                        <input type="text" class="form-control" placeholder="선수 또는 팀명 입력" style="width: 25em;">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3"
                                style="padding: 0; background: Transparent; border: none !important; outline: none !important;;">
                            <i class="fab fa-searchengin" style="font-size: 2em;"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div class="row" style="height: 40px;">
                <div class="col"></div>
                <div class="col">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">선수</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">팀</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">리그</a>
                        </li>
                    </ul>
                </div>
                <div class="col" style="height: 40px; line-height: 40px;">
                    <div class="" style="font-size: 12px;">오늘의 예정 경기 / 17:00
                        젠지 vs kt 롤스터 / 20:00 농심 레드포스 vs DRX
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .btn {
        outline: 0px !important;
        -webkit-appearance: none;
        box-shadow: none !important;
    }

    .nav-link {
        text-align: center;
        width: 4em;
        color: white;
        font-size: 1em;
    }

    .nav-link.active {
        border-bottom: 1px solid white;
    }
</style>
