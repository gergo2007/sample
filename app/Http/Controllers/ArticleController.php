<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $articles = Article::all();

        // TODO: show avg rating, how many users rated.

        return response()->json($articles);
    }


    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        if (!\Auth::check()) {
            return response()->json(['error' => 'Unauthorized']);
        }

        $ip = request()->getClientIp();

        $userLimit = DB::table('view_limits')
            ->select(['ip', 'usage_count'])
            ->where('ip', $ip)
            ->first();

        if (!$userLimit) {
            // First viewing the article.
            DB::table('view_limits')
                ->insert([
                    'ip'         => $ip,
                    'created_at' => now(),
                ]);
        } elseif ($userLimit->usage_count >= 3) {
            // Out of free usage.
            return response()->json(['error' => 'Unauthorized']);
        } else {
            // Count usage.
            DB::table('view_limits')
                ->select(['ip', 'usage_count'])
                ->where('ip', $ip)
                ->increment('usage_count', 1, [
                    'updated_at' => now()
                ]);
        }

        $article = Article::where('id', $id)->first();

        $ratings = $article->ratings;
        $articleRating = 0;
        foreach ($ratings as $rating) {
            $articleRating += $rating->rating;
        }

        $article->avg_rating = $articleRating / count($ratings);

        // TODO: show email of author.

        return response()->json(ArticleResource::make($article));
    }
}
