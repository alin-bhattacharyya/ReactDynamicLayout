import React from "react";

const Page2 = () => {
    return <div style={{ padding: "80px", color: "blue", marginLeft:"100px" }}>
        <form>
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">Email</label>
            </div>
            <div class="form-group">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <div>
            <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
            </div>
        </form>
    </div>;
}

export default Page2;